import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../redux/slices/quizSlice";
import WelcomeScreen from "./WelcomeScreen";
import QuizProgress from "../components/QuizProgress";
import QuizTimer from "../components/QuizTimer";

export default function QuizCard() {
  const dispatch = useDispatch();
  const { questions, currentIndex, quizStarted } = useSelector(
    (state) => state.quiz
  );
  const question = questions[currentIndex];
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeSpent, setTimeSpent] = useState(0);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  useEffect(() => {
    if (!quizStarted) return;

    setSelectedOption(null);
    setIsOptionSelected(false);
    setTimeSpent(0);

    const timer = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, quizStarted]);

  const handleOptionClick = (option) => {
    if (isOptionSelected || !quizStarted) return;

    setSelectedOption(option);
    setIsOptionSelected(true);

    setTimeout(() => {
      dispatch(
        answerQuestion({
          answer: option,
          timeSpent,
        })
      );
    }, 1000);
  };

  const getOptionClass = (option) => {
    let baseClass =
      "w-full px-6 py-3 text-lg font-medium rounded-xl transition-all duration-300 ";

    if (!isOptionSelected) {
      return baseClass + "bg-gray-100 hover:bg-red-100 text-gray-800";
    }

    if (option === question.correctAnswer) {
      return baseClass + "bg-green-500 text-white shadow-lg";
    }

    if (option === selectedOption && option !== question.correctAnswer) {
      return baseClass + "bg-red-500 text-white shadow-lg";
    }

    return baseClass + "bg-gray-200 text-gray-500";
  };

  if (!quizStarted) {
    return (
      <WelcomeScreen onStart={() => dispatch({ type: "quiz/startQuiz" })} />
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6 gap-10">
        <QuizProgress current={currentIndex + 1} total={questions.length} />
        <QuizTimer />
      </div>
      <div className="bg-white p-6 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-6 text-center">
          {question.question}
        </h2>

        <div className="space-y-4 mt-8">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={getOptionClass(option)}
              onClick={() => handleOptionClick(option)}
              disabled={isOptionSelected}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {isOptionSelected && option === question.correctAnswer && (
                  <span className="ml-2">✓</span>
                )}
              </div>
            </button>
          ))}
        </div>

        {isOptionSelected && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800">
              معلومة مفيدة:
            </h3>
            <p className="text-blue-700 mt-2">
              {question.funFact || "أحسنت! هذه الإجابة الصحيحة."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
