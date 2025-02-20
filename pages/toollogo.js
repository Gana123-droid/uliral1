import { useEffect, useState } from "react";

export default function Index() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const Timer = (Time) => {
      if (Time < 10) {
        setTimeout(() => {
          setTime(Time + 1);
          Timer(Time + 1);
        }, 1000);
      } 
    };

    Timer(0);
  }, []);

  return(
    <div className="flex items-center justify-center h-screen">
    <button className="border border-white shadow-lg shadow-white w-[100px] h-[50px] text-center rounded-lg">
    Timer: {time}
    </button>
    </div>
  )
}