import Image from "next/image";
import localFont from "next/font/local";
import { useRouter } from 'next/router';
import React, {useState} from "react";

export default function Task2() {
  const [color, setColor] = useState("");
  const router = useRouter();
  return (
    <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
        <button className="absolute top-5 right-5 border-2 border-white text-white p-4 rounded-md hover:bg-purple-200 shadow-md shadow-white" onClick={() => router.back()}>
        Back
      </button>
        <p>Өнгө солих:</p>
        <button
        className="border bg-red-800 py-4 px-6" onClick={()=>{setColor("red");}}>  
        Улаан
        </button>

        <button
        className="border bg-blue-800 py-4 px-6" onClick={()=>{setColor("blue");}}>
            Цэнхэр
        </button>
        
        <button
        className="border bg-green-800 py-4 px-6" onClick={()=>{setColor("green");}}>
            Ногоон
        </button>
    </div>
   );
}