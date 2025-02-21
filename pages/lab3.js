import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';

export default function Lab3() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
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
          ...result_tourist.touristAttractions,
          ...result_clothes.clothes,
          ...result_instruments.instruments,
          ...result_historyTool.historicalTools,
          ...result_ethics.ethnicGroups,
          ...result_province.provinces,
          ...result_historyFigure.historicalFigures,
        ]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="grid grid-cols-4 gap-4 bg-white max-h-full w-full ">
      {(data || [])?.map((item) => (
        <div className="text-black border border-black shadow-lg rounded-md w-[400px] ">
          <img
            src={item.images}
            alt={item.name}
            className="w-full h-56 object-cover border rounded-lg mb-4 "
          />
          <p className="text-xl font-bold text-center">{item?.name}</p>
          <p className="text-center">{item?.description}</p>
          <p className="opacity-75 text-center">{item?.address?.country}</p>
        </div>
      ))}
    </div>
  );
}
