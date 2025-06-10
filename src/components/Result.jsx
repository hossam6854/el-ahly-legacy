import { useDispatch, useSelector } from "react-redux";
import { restartQuiz } from "../redux/slices/quizSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShareButtons from "./ShareButtons";
import QuizAnalytics from "./QuizAnalytics";

export default function Result() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score, questions, timer } = useSelector((state) => state.quiz);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const totalQuestions = questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);
  const timeLeft = 900 - timer;
  const avgTimePerQuestion = Math.round(timeLeft / totalQuestions);

  const getMessage = () => {
    if (percentage >= 90) return "أنت أسطورة الأهلي! 🔥🏆 معرفتك لا تشقى لها غبار";
    if (percentage >= 80) return "عاش الأهلاوي الأصيل! ❤️🦅 أنت من خيرة المشجعين";
    if (percentage >= 60) return "أهلاوي قوي! 💪 لديك معرفة جيدة ولكن يمكنك التحسن";
    if (percentage >= 40) return "معرفتك متوسطة 📘 تحتاج لمتابعة أكثر للأهلي";
    return "يبدو أنك بحاجة لزيارة متحف النادي 🏛️ ابدأ بالقراءة عن تاريخ الأهلي العريق";
  };

  const getBadge = () => {
    if (percentage >= 90) return "🏆 الأسطورة";
    if (percentage >= 80) return "🦅 الأصيل";
    if (percentage >= 60) return "🔴 المتالق";
    if (percentage >= 40) return "⚪ المتعلم";
    return "📚 المبتدئ";
  };

  return (
    <div className="p-6 md:p-8 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-2">انتهى الاختبار!</h1>
        <p className="text-xl text-gray-600 mb-8">أدائك في اختبار معرفة النادي الأهلي</p>
        
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-6 text-white shadow-lg mb-8">
          <div className="text-5xl font-bold mb-2">{score}/{totalQuestions}</div>
          <div className="text-2xl font-semibold mb-4">{percentage}%</div>
          <div className="text-xl mb-2">{getMessage()}</div>
          <div className="text-2xl font-bold mt-4">{getBadge()}</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow">
            <div className="text-gray-500">متوسط الوقت</div>
            <div className="text-xl font-bold">{avgTimePerQuestion} ثانية</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <div className="text-gray-500">الوقت المتبقي</div>
            <div className="text-xl font-bold">{Math.floor(timer/60)}:{timer%60 < 10 ? '0' : ''}{timer%60}</div>
          </div>
        </div>
        
        <button
          onClick={() => setShowAnalytics(!showAnalytics)}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition mb-4"
        >
          {showAnalytics ? "إخفاء التحليلات" : "عرض التحليلات التفصيلية"}
        </button>
        
        {showAnalytics && <QuizAnalytics />}
        
        <div className="mt-8 space-y-4">
          <button
            onClick={() => dispatch(restartQuiz())}
            className="w-full md:w-auto px-8 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition font-bold"
          >
            إعادة الاختبار
          </button>
          
          <ShareButtons score={score} total={totalQuestions} badge={getBadge()} />
          
          <button
            onClick={() => navigate('/')}
            className="w-full md:w-auto px-8 py-3 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition"
          >
            العودة للرئيسية
          </button>
        </div>
      </div>
    </div>
  );
}