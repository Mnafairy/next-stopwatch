import React, { useState, useEffect } from "react";
const Clock = () => {
  const [date, setDate] = useState(new Date());
  console.log(date);
  setInterval(() => {
    setDate(new Date());
  }, 1000);
  return (
    <div className="flex justify-center">
      <div>
        {/* <p>{date.toLocaleDateString()}</p>
        <p>{date.toLocaleString()}</p> */}
        <p> {date.toLocaleTimeString()}</p>
      </div>
    </div>
  );
};
export default Clock;
