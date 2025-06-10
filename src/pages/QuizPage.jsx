import QuizCard from "../components/QuizCard";
import Result from "../components/Result";
import { useSelector } from "react-redux";
import QuizHeader from "../components/QuizHeader";


export default function QuizPage() {
  const { isFinished } = useSelector((state) => state.quiz);

  return (
    <div className="min-h-screen  p-4 md:p-8" dir="rtl">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {!isFinished ? (
          <>
            <QuizHeader />
            <div className="p-6 md:p-8">
              
              <QuizCard />
            </div>
          </>
        ) : (
          <Result />
        )}
      </div>
    </div>
  );
}