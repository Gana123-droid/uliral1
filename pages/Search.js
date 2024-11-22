
import React, {useState} from "react";
export default function Search() {
    const [search, setSearch] = useState("");
    console.log(search);
  return (
    <div className="flex justify-center items-center h-screen w-full flex-col bg-gradient-to-br from-black to-white">
      
        <input className="text-black border-4 border-black" type="search" onChange={(e) => setSearch(e.target.value)}/>
        <p className="text-black">search: {search}</p>
    </div>
  );
}