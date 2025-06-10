import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../../data/playersData";

// تحسين اختيار الأسئلة العشوائية مع ضمان عدم تكرارها
const getRandomQuestions = () => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 25).map((q, index) => ({
    ...q,
    questionNumber: index + 1 // إضافة رقم ترتيبي للسؤال
  }));
};

// حالة أولية محسنة
const initialState = {
  questions: getRandomQuestions(),
  currentIndex: 0,
  answers: [],
  score: 0,
  isFinished: false,
  timer: 900, // 15 دقيقة (900 ثانية) لكل الاختبار
  isTimerRunning: true,
  difficultyStats: { easy: 0, medium: 0, hard: 0 }, // إحصاءات صعوبة الأسئلة
  categoryStats: {}, // إحصاءات حسب الفئة
  quizStarted: false,

};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerQuestion(state, action) {
      const { answer, timeSpent } = action.payload;
      const currentQuestion = state.questions[state.currentIndex];

      state.answers.push({
        questionId: currentQuestion.id,
        answer,
        isCorrect: answer === currentQuestion.correctAnswer,
        timeSpent: timeSpent || 0
      });

      if (answer === currentQuestion.correctAnswer) {
        state.score += 1;
        
        // تحديث إحصاءات الصعوبة
        if (currentQuestion.difficulty) {
          state.difficultyStats[currentQuestion.difficulty] += 1;
        }
      }

      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex += 1;
      } else {
        state.isFinished = true;
        state.isTimerRunning = false;
      }
    },
    restartQuiz(state) {
      const newQuestions = getRandomQuestions();
      return {
        ...initialState,
        questions: newQuestions
      };
    },
    tickTimer(state) {
      if (state.isTimerRunning && state.timer > 0) {
        state.timer -= 1;
      } else if (state.timer === 0 && !state.isFinished) {
        state.isFinished = true;
        state.isTimerRunning = false;
      }
    },
    pauseTimer(state) {
      state.isTimerRunning = false;
    },
    resumeTimer(state) {
      state.isTimerRunning = true;
    },
    startQuiz: (state) => {
      state.quizStarted = true;
    },
    skipQuestion(state) {
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex += 1;
        state.answers.push({
          questionId: state.questions[state.currentIndex].id,
          answer: null,
          isCorrect: false,
          skipped: true
        });
      } else {
        state.isFinished = true;
      }
    }
  },
});

export const { 
  answerQuestion, 
  restartQuiz, 
  tickTimer, 
  pauseTimer, 
  resumeTimer,
  skipQuestion,
  startQuiz
} = quizSlice.actions;
export default quizSlice.reducer;