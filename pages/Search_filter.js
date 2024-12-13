import { useState } from "react";
import { useRouter } from 'next/router';
const data = [
  { id: 1, name: "Tuvshin", email: "Tuvshin@example.com" },
  { id: 2, name: "Temuugei", email: "Temuugei@example.com" },
  { id: 3, name: "Bill", email: "Bill@example.com" },
  { id: 4, name: "Temulan", email: "Temulan@example.com" },
  { id: 5, name: "Boldoo", email: "Boldoo@example.com" },
];

export default function Sfilter() {
    const [search, setSearch] = useState("");
    const filteredData = data.filter((items) =>
        items.name.toLowerCase().includes(search.toLowerCase())
      );
      const router = useRouter();
 
  return (
    <div className="w-full h-screen bg-white px-80">
      <button className="absolute top-5 left-5 border-2 border-black text-black p-4 rounded-md hover:bg-purple-200 shadow-lg" onClick={() => router.back()}>
        Back
      </button>
      <div className="w-full h-[100px] flex items-center flex-col gap-3 pt-3 ">
        <p className="font-bold text-xl text-black">Taniltsuulga</p>
        <input
          className="text-black border flex  border-black w-full shadow-lg"
          type="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div >
        {filteredData.length > 0 ? (
            filteredData.map((data) => (
                <div className="w-full h-[120px] rounded-lg border border-black mt-8 shadow-lg">
                  <p className="text-lg text-black font-bold text-opacity-80 pl-2">{data.name}</p>
                  <p className="mt-4 text-sm text-opacity-40 text-black pl-2">{data.email}</p>
                </div>

              ))
        ): <div className="text-black text-lg">no result for : {search}</div>}
      </div>
    </div>
  );
}
