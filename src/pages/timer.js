import { TimerComp } from "@/components/TimerComp";
import { useState } from "react";
const Timer = () => {
  const [initialSeconds, setInitialSeconds] = useState(0);

  const handleInputChange = (e) => {
    setInitialSeconds(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="flex flex-col items-center">
      <label>
        Time in seconds-
        <input
          type="text"
          value={initialSeconds}
          onChange={handleInputChange}
        />
        <input type="text" />
      </label>
      <TimerComp initialSeconds={initialSeconds} />
    </div>
  );
};
export default Timer;

// hour*3600+minute*60+second =
