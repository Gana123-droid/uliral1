import { useRouter } from "next/router";
import {useEffect, useState} from "react";


export default function ID() {
    const [grid, setGrid] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
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
              ...(result_tourist.touristAttractions ),
              ...(result_clothes.clothes ),
              ...(result_instruments.instruments ),
              ...(result_historyTool.historicalTools ),
              ...(result_ethics.ethnicGroups ),
              ...(result_province.provinces ),
              ...(result_historyFigure.historicalFigures ),
            ]);
            setLoading(false);
          } catch (error) {
            setLoading(false);
            console.log(error);
          }
        };
        fetchData();
      }, []);
      return(
        <div>
            {loading ? (
        <div className="w-full h-screen flex justify-center items-center flex-col gap-3">
        <div className="w-32 h-32 rounded-full border-4 border-blue-500 border-t-transparent bg-transparent animate-spin">
          
        </div>
        <div className="flex flex-row"><div className="text-xl text-white">Loading</div>
        <div className="animate-bounce text-xl  text-white">.</div>
        <div className="animate-bounce text-xl    text-white" style={{ animationDelay: "0.2s" }}>.</div>
        <div className="animate-bounce text-xl   text-white" style={{ animationDelay: "0.4s" }}>.</div>
        </div>
        </div>
      ) : (
        <>
            <button className="border-md border-black " onClick={() => router.back()}>Back</button>
            {(data || []).  map((item, index) =>
            router.query.id === item.id && router.query.slug == item.name ? (
                <div>
                    {item.name} {item.description}
                    <img src={item?.images} className="w-40 object-cover"/>
                </div>
            ) : (
                <div></div>
            )
            )}
            </>
          )}
            </div>
    
      );
    }