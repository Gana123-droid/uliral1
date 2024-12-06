import React, {useState} from "react";
export default function Json(){
const[grid, setGrid] = useState(false);
const data = [
    {
        id: 1,
        Test: "Test1",
        Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
        id: 2,
        Test: "Test2",
        Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
        id: 3,
        Test: "Test3",
        Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
        id: 4,
        Test: "Test4",
        Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
        id: 5,
        Test: "Test5",
        Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    }
]

return(
    <div className="w-full h-screen bg-white px-80 ">
        <div className="flex justify-between mt-4 mx-8">
            <p className="text-2xl font-bold">Niitleluud</p>
            <button className="text-2xl text-blue-500 underline font-bold" onClick={() => setGrid(!grid)}>{grid == false ? "Grid me" : "Ungrid me"}</button>
        </div>
        
        <div className={(grid ==false ? "w-full text-black mt-4" : "w-full text-black grid grid-cols-2 gap-x-8 mt-4" )}>
            {data?.map((data, index) => (
                <div key={index}>
                    <div className="border border-black rounded-lg p-4 mb-4">
                        <p className="text-sm font-bold">{data.Test}</p>
                        <p className="mt-4">{data.Desc}</p>
                    </div>
                </div>
            ) )}
        </div>
    </div>
)
}