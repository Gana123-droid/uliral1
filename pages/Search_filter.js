import { useState } from "react";
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
 
  return (
    <div className="w-full h-screen bg-white px-80">
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
