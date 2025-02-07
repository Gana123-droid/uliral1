import Image from "next/image";
import {useEffect, useState} from "react";     
export default function Dynamic(){
    const[color, setColor]= useState("");
    useEffect(() => {setColor("red");},)
    return(
        <div className={`bg-${color}-800 h-screen`}>
        <div className="flex flex-cols gap-5 ml-4 pt-4 ">
        <div onClick={() => setColor("red")} className="bg-red-800 rounded-lg h-[200px] w-[200px] flex items-center justify-center border border-white">
            <button className="text-white text-2xl font-bold">Red</button>
        </div>
        <div onClick={() => setColor("blue")} className="bg-blue-800 rounded-lg h-[200px] w-[200px] flex items-center justify-center border border-white">
        <button className="text-white text-2xl font-bold">blue</button>
        </div>
        <div onClick={() => setColor("pink")} className="bg-pink-800 rounded-lg h-[200px] w-[200px] flex items-center justify-center border border-white">
        <button className="text-white text-2xl font-bold">pink</button>
        </div>
        <div onClick={() => setColor("white")} className="bg-white rounded-lg h-[200px] w-[200px] flex items-center justify-center border-4 border-black">
        <button className="text-black text-2xl font-bold">clear</button>
        </div>
        </div>
        </div>
     )
}