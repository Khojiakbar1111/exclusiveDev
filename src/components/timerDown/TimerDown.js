import { useEffect, useRef, useState } from "react";

const formatTime = (time) => {
  const days = Math.floor(time / (24 * 60 * 60));
  const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = time % 60;

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
};

const CountdownTimer = ({ targetDate }) => {
  const [countDown, setCoundDown] = useState(
    Math.floor((targetDate - new Date()) / 1000)
  );
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCoundDown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countDown <= 0) {
      clearInterval(timerId.current);
    }
  }, [countDown]);

  const { days, hours, minutes, seconds } = formatTime(countDown);

  return (
    <div className="time-content">
      <h1>Flash Sales</h1>
      <div className="time">
        <span className="text">days</span>
        <span className="number">
          {days} <span>:</span>
        </span>
      </div>
      <div className="time hours">
        <span className="text">hours</span>
        <span className="number">
          {hours} <span>:</span>
        </span>
      </div>
      <div className="time minutes">
        <span className="text">minutes</span>
        <span className="number">
          {minutes} <span>:</span>
        </span>
      </div>
      <div className="time seconds">
        <span className="text">seconds</span>
        <span className="number">{seconds}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
