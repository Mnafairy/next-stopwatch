import { TimerComp } from "@/components/TimerComp";
import { useState } from "react";
const Timer = () => {
  const [initialSeconds, setInitialSeconds] = useState(120);

  const handleInputChange = (e) => {
    setInitialSeconds(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="flex flex-col items-center">
      <label>
        Time in seconds-
        <input
          type="number"
          value={initialSeconds}
          onChange={handleInputChange}
        />
      </label>
      <TimerComp initialSeconds={initialSeconds} />
    </div>
  );
};
export default Timer;
