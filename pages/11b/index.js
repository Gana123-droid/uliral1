import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Sfilter() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [grid, setGrid] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const tourist = await fetch(
          "https://mongol-api-rest.vercel.app/touristAttractions"
        );
        const clothes = await fetch(
          "https://mongol-api-rest.vercel.app/clothes"
        );
        const instruments = await fetch(
          "https://mongol-api-rest.vercel.app/instruments"
        );
        const historyTool = await fetch(
          "https://mongol-api-rest.vercel.app/historicalTools"
        );
        const ethics = await fetch(
          "https://mongol-api-rest.vercel.app/ethnicGroups"
        );
        const province = await fetch(
          "https://mongol-api-rest.vercel.app/provinces"
        );
        const historyFigure = await fetch(
          "https://mongol-api-rest.vercel.app/historicalFigures"
        );

        const result_tourist = await tourist.json();
        const result_clothes = await clothes.json();
        const result_instruments = await instruments.json();
        const result_historyTool = await historyTool.json();
        const result_ethics = await ethics.json();
        const result_province = await province.json();
        const result_historyFigure = await historyFigure.json();

        setData([
          ...(result_tourist.touristAttractions || []),
          ...(result_clothes.clothes || []),
          ...(result_instruments.instruments || []),
          ...(result_historyTool.historicalTools || []),
          ...(result_ethics.ethnicGroups || []),
          ...(result_province.provinces || []),
          ...(result_historyFigure.historicalFigures || []),
        ]);

        setLoading(false); 
      } catch (error) {
        console.log(error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-white">
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center flex-col">
        <div className="w-32 h-32 rounded-full border-4 border-blue-500 border-t-transparent bg-transparent animate-spin">
          
        </div>
        <div className="flex flex-row"><div className="text-xl text-black">Loading</div>
        <div className="animate-bounce text-xl  text-black">.</div>
        <div className="animate-bounce text-xl    text-black" style={{ animationDelay: "0.2s" }}>.</div>
        <div className="animate-bounce text-xl   text-black" style={{ animationDelay: "0.4s" }}>.</div>
        </div>
        </div>
      ) : (
        <>
          <div className="w-full flex items-center flex-col gap-3">
            <div className="flex justify-between mt-4 mx-8 fixed top-1 right-1">
              <button
                className="lg:text-2xl sm:text-lg md:text-xl text-blue-500 underline font-bold border border-black sm:w-[50px] sm:h[25px] md:w-[80px] lg:w-[100px] lg:h-[50px] rounded-lg"
                onClick={() => setGrid(!grid)}
              >
                {grid ? "Ungrid" : "Grid"}
              </button>
            </div>
            <p className="font-bold text-xl text-black">Mongol-api</p>
            <input
              className="text-black border border-black w-1/2 p-2 rounded shadow-lg"
              type="search"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex justify-center">
            <div
              className={`grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 ${
                grid ? "grid md:grid-cols-1 lg:grid-cols-1 w-[650px]" : ""
              }`}
            >
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <div
                    key={item.id}
                    className="text-black border border-black shadow-lg rounded-md p-4 cursor-pointer"
                    onClick={() => router.push(`/11b/${item.id}`)}
                  >
                    <img
                      src={item.images}
                      alt={item.name}
                      className="w-full h-56 object-cover rounded-lg mb-4"
                    />
                    <p className="text-xl font-bold text-center">{item.name}</p>
                    <p className="text-center">{item.description}</p>
                    {item.address?.country && (
                      <p className="opacity-75 text-center">{item.address.country}</p>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-black text-lg col-span-4 text-center">
                  No results found for: <b>{search}</b>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
