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
          } catch (error) {
            setLoading(false);
            console.log(error);
          }
        };
        fetchData();
      }, []);
      return(
        <div>
            {loading && <p>...Loading</p>}
            <button className="border-md border-black " onClick={() => router.back()}>Back</button>
            {(data || []).map((item, index) =>
            router.query.id === item.id ? (
                <div>
                    {item.name} {item.description}
                    <img src={item?.images} className="w-40 object-cover"/>
                </div>
            ) : (
                <div></div>
            )
            )}
            </div>
    
      );
    }