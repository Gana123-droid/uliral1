import Image from "next/image";
import { useState } from "react";

export default function Taniltsuulga(){
  const [isHover, setHover] = useState(false);

  return (
    <div className="bg-gradient-to-b from-indigo-100 to-pink-100 text-black flex justify-center items-center w-full h-screen">
      <div
        className="w-[300px] h-[500px] border border-white border-4 flex justify-evenly items-center flex-col shadow-xl transition delay-100 duration-1000 hover:scale-125"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div>
          <Image src="/zurag.webp" width={200} height={200} />
        </div>  
        <div className="flex justify-center items-center">
          <div className="text-l font-bold italic">
            <div className={`flex flex-row ${isHover ? "hidden" : "flex"}` }>
              <p>Firstname:</p><p className="ml-1">Gan-Erdene</p>
            </div>
            <div className={`flex flex-row ${isHover ? "hidden" : "flex"}`}>
              <p>Lastname:</p><p className="ml-1">Undrakhtamir</p>
            </div>
            <div className={`flex flex-row ${isHover ? "hidden" : "flex"}`}>
              <p>Class:</p><p className="ml-1">11b</p>
            </div>
            <div className={`flex flex-row ${isHover ? "hidden" : "flex"}`}>
              <p>Sex:</p><p className="ml-1">M</p>
            </div>
            <div className={`flex flex-row text-center ${isHover ? "flex" : "hidden"}`}>
              <p>StudentId:</p><p className="ml-1">22261006</p>
            </div>
            <div className={`flex flex-row ${isHover ? "flex" : "hidden"}`}>
              <p>phone:</p><p className="ml-1">89091717</p>
            </div>
            <div className={`flex flex-row ${isHover ? "flex" : "hidden"}`}>
              <p>email:</p><p className="ml-1">ganerdene081209@gmail.com</p>
            </div>
            <div className={`flex flex-row ${isHover ? "flex" : "hidden"}`}>
              <p>Nation:</p><p className="ml-1">Mongolia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

