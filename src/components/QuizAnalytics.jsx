import { useSelector } from "react-redux";

export default function QuizAnalytics() {
  const { questions, answers } = useSelector((state) => state.quiz);
  
  const correctAnswers = answers.filter(a => a.isCorrect).length;
  const wrongAnswers = answers.filter(a => !a.isCorrect && !a.skipped).length;
  const skippedQuestions = answers.filter(a => a.skipped).length;
  
  const categories = {};
  questions.forEach(q => {
    if (q.category) {
      categories[q.category] = (categories[q.category] || 0) + 1;
    }
  });
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">تحليلات أدائك</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="text-green-800 font-bold text-lg">{correctAnswers}</div>
          <div className="text-green-600">إجابات صحيحة</div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <div className="text-red-800 font-bold text-lg">{wrongAnswers}</div>
          <div className="text-red-600">إجابات خاطئة</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <div className="text-yellow-800 font-bold text-lg">{skippedQuestions}</div>
          <div className="text-yellow-600">أسئلة تخطيتها</div>
        </div>
      </div>
      
      <h4 className="font-semibold text-gray-700 mb-2">توزيع الأسئلة حسب الفئة:</h4>
      <div className="space-y-2 mb-4">
        {Object.entries(categories).map(([category, count]) => (
          <div key={category} className="flex items-center">
            <div className="w-24 text-gray-600">{category}</div>
            <div className="flex-1 bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-red-600 h-2.5 rounded-full" 
                style={{ width: `${(count / questions.length) * 100}%` }}
              ></div>
            </div>
            <div className="w-8 text-right text-sm text-gray-500">{count}</div>
          </div>
        ))}
      </div>
      
      <h4 className="font-semibold text-gray-700 mb-2">الأسئلة التي أخطأت فيها:</h4>
      <div className="space-y-3">
        {answers
          .filter(a => !a.isCorrect && !a.skipped)
          .map((answer, index) => {
            const question = questions.find(q => q.id === answer.questionId);
            return (
              <div key={index} className="p-3 bg-red-50 rounded-lg border border-red-100">
                <p className="font-medium text-red-800">{question.question}</p>
                <p className="text-sm mt-1">
                  <span className="text-red-600">إجابتك:</span> {answer.answer || '--'}
                </p>
                <p className="text-sm">
                  <span className="text-green-600">الإجابة الصحيحة:</span> {question.correctAnswer}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}