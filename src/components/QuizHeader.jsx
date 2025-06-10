import { useSelector } from "react-redux";

export default function QuizHeader() {
  const { currentIndex, questions } = useSelector((state) => state.quiz);
  
  return (
    <div className="bg-red-700 text-white p-4">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <div className="text-xl font-bold">اختبار الأهلي الأصيل</div>
        <div className="text-lg">
          سؤال {currentIndex + 1} من {questions.length}
        </div>
      </div>
    </div>
  );
}