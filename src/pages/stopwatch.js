import { useState, useEffect } from "react";
const Stopwatch = () => {
  // const [time, setTime] = useState({
  //   hour: 0,
  //   minute: 0,
  //   second: 0,
  // });
  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
  //   isRunning
  //     ? (intervalId = setInterval(() => setTime(time + 1), 10))
  //     : () => clearInterval(intervalId);
  // });
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);
  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };
  const reset = () => {
    setTime(0);
  };
  return (
    <div className="flex flex-col items-center">
      <p className="stopwatch-time">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <div className="flex gap-2">
        <button onClick={startAndStop}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
export default Stopwatch;
