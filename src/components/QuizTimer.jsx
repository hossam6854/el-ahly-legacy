import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { tickTimer } from "../redux/slices/quizSlice";

export default function QuizTimer() {
  const dispatch = useDispatch();
  const { timer, isTimerRunning } = useSelector((state) => state.quiz);
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTimerRunning) {
        dispatch(tickTimer());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerRunning, dispatch]);

  return (
    <div className={`text-lg font-bold ${timer < 60 ? 'text-red-600' : 'text-gray-800'}`}>
      {minutes}:{seconds < 10 ? '0' : ''}{seconds}
    </div>
  );
}