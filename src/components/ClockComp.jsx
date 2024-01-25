// import { useState } from "react";
// function getDate() {
//   const today = new Date();
//   const time = today. getTime();
//   const month = today.getHours() + 1;
//   const year = today.getMinutes();
//   const date = today.getSeconds();
//   return `${time}`;
// }
// export const ClockComp = () => {
//   const [currentDate, setCurrentDate] = useState(getDate());

//   return <div>{currentDate}</div>;
// };

import React, { useState, useEffect } from "react";

export function ClockComp() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    
  );
}
