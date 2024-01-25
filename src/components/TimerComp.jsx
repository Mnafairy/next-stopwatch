import { useState, useEffect } from "react";

export const TimerComp = ({ initialSeconds }) => {
  console.log(initialSeconds);
  const [time, setTime] = useState(initialSeconds * 1);
  const [isRunning, setIsRunning] = useState(false);

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);
  // (hour*60*60+minute*60+second)
  useEffect(() => {
    setTime(initialSeconds);
  }, [initialSeconds]);
  useEffect(() => {
    let intervalId;
    if (time === 0) return;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time - 1), 1000);
    }
    return () => clearInterval(intervalId);
  }, [time, isRunning]);

  return (
    <div className="flex flex-col justify-center items-center">
      <p>
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
      <button onClick={startAndStop}>{isRunning ? "stop" : "start"}</button>
    </div>
  );
};
