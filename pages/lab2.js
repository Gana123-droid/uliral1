import {useEffect, useState} from "react";   
export default function Lab2(){

    const [data, setData] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(
                    "https://mongol-api-rest.vercel.app/touristAttractions"
                );
                const result = await response.json();
                setData(result);
            } catch (error){
                console.log(error);
            }
        };
        fetchData();
    }, []);
    console.log(data);
    return(
        <div className="grid grid-cols-4 gap-4 bg-white max-h-full w-full ">
            {data?.touristAttractions?.map((item) => (
                <div className="text-black border border-black shadow-lg rounded-md w-[400px] ">
                  <img
              src={item.images[0]} 
              alt={item.name}
              className="w-full h-56 object-cover border rounded-lg mb-4 "
            />
                    <p  className="text-xl font-bold text-center">{item?.name}</p> 
                   <p className="text-center">{item?.description}</p>  
                  <p className="opacity-75 text-center">{item?.address?.country}</p>                      
                </div>
            ))}
        </div>
    )
}
