import Image from "next/image";
import localFont from "next/font/local";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-indigo-100 to-pink-100 text-black flex justify-center items-center h-screen">
      <div className="w-[300px] h-[500px] border border-white border-4 flex justify-evenly items-center flex-col  shadow-xl transition delay-100 duration-1000 hover:scale-125  ">
        <div> <Image src="/zurag.webp" width={200} height={200} /></div>
   <div className="flex justify-center items-center">
    <div className="text-l font-bold italic">
      <div className="flex flex-row">
        <p>Firstame:</p><p className="ml-1">Gan-Erdene</p>
      </div>
    <div className="flex flex-row">
        <p>Lastname:</p><p className="ml-1">Undrakhtamir</p>
      </div>
      
      <div className="flex flex-row">
        <p>Class:</p><p className="ml-1">11b</p>
      </div>
      <div className="flex flex-row"> 
        <Image src=""/>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
}
