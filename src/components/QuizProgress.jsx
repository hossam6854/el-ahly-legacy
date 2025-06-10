
export default function QuizProgress({ current, total }) {
  const percentage = (current / total) * 100;
  
  return (
    <div className="w-full md:w-64">
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>التقدم</span>
        <span>{current}/{total}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-red-600 h-2.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}