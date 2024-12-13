import { useRouter } from 'next/router'
import React, {useState} from "react";
export default function Search() {
    const [search, setSearch] = useState("");
    const router = useRouter();
    console.log(search);
  return (
    <div className="flex justify-center items-center h-screen w-full flex-col bg-gradient-to-br from-black to-white">
      <button className="absolute top-5 left-5 border-2 border-white text-white p-4 rounded-md hover:bg-purple-200 shadow-md shadow-white" onClick={() => router.back()}>
        Back
      </button>
        <input className="text-black border-4 border-black" type="search" onChange={(e) => setSearch(e.target.value)}/>
        <p className="text-black">search: {search}</p>
    </div>
  );
}