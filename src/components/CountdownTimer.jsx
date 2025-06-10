// components/CountdownTimer.js
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CountdownTimer = ({ targetDate, targetTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(targetDate);
      target.setHours(targetTime.split(':')[0]);
      target.setMinutes(targetTime.split(':')[1]);
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-2 md:gap-4">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold text-white">{timeLeft.days}</span>
        <span className="text-xs text-gray-300">أيام</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold text-white">{timeLeft.hours}</span>
        <span className="text-xs text-gray-300">ساعات</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold text-white">{timeLeft.minutes}</span>
        <span className="text-xs text-gray-300">دقائق</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold text-white">{timeLeft.seconds}</span>
        <span className="text-xs text-gray-300">ثواني</span>
      </div>
    </div>
  );
};

CountdownTimer.propTypes = {
  targetDate: PropTypes.string.isRequired,
};

export default CountdownTimer;