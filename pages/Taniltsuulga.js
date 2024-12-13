import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/router'

export default function Taniltsuulga() {
  const [isHover, setHover] = useState(false);
  const router = useRouter();
  return (
    <div className="w-full h-screen bg-gradient-to-b from-indigo-100 to-pink-100 text-black flex justify-center items-center">
      <button className="absolute top-5 left-5 border-2 border-black text-black p-4 rounded-md shadow-lg hover:bg-purple-200 " onClick={() => router.back()}>
        Back
      </button>

      <div className="flex justify-center items-center">
        <div
          className="w-[300px] h-[500px] border border-white border-4 flex justify-evenly items-center flex-col shadow-xl transition delay-100 duration-1000 hover:scale-125"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div>
            <Image src="/zurag.webp" width={200} height={200} alt="Profile Image" />
          </div>
          <div className="flex justify-center items-center">
            <div className="text-l font-bold italic">
              {!isHover && (
                <>
                  <div className="flex flex-row">
                    <p>Firstname:</p><p className="ml-1">Gan-Erdene</p>
                  </div>
                  <div className="flex flex-row">
                    <p>Lastname:</p><p className="ml-1">Undrakhtamir</p>
                  </div>
                  <div className="flex flex-row">
                    <p>Class:</p><p className="ml-1">11b</p>
                  </div>
                  <div className="flex flex-row">
                    <p>Sex:</p><p className="ml-1">M</p>
                  </div>
                </>
              )}

              {isHover && (
                <>
                  <div className="flex flex-row text-center">
                    <p>StudentId:</p><p className="ml-1">22261006</p>
                  </div>
                  <div className="flex flex-row">
                    <p>Phone:</p><p className="ml-1">89091717</p>
                  </div>
                  <div className="flex flex-row">
                    <p>Email:</p><p className="ml-1">ganerdene081209@gmail.com</p>
                  </div>
                  <div className="flex flex-row">
                    <p>Nation:</p><p className="ml-1">Mongolia</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
