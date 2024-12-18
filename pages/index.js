import { useRouter } from 'next/router'

export default function Home(){
    const router = useRouter();
    return(
    <div className='bg-blue-200 w-full h-screen text-xl'>
        <p className='flex justify-center  pt-5 mb-5 text-2xl text-black font-bold '>Home</p>
        <div className='grid grid-cols-2 gap-4 gap-y-24 mx-2'>
        <p className='border-2 border-pink-400 bg-purple-200 hover:bg-purple-400 flex p-4 w-full h-[200%] justify-center items-center rounded-lg shadow-xl text-purple-900' onClick={() => router.push("Taniltsuulga")}>Taniltsuulga</p>
        <p className='border-2 border-pink-400 bg-purple-200 hover:bg-purple-400 flex p-4 w-full h-[200%] justify-center items-center rounded-lg shadow-xl text-purple-900' onClick={() => router.push("Search")}>Search</p>
        <p className='border-2 border-pink-400 bg-purple-200 hover:bg-purple-400 flex p-4 w-full h-[200%] justify-center items-center rounded-lg shadow-xl text-purple-900' onClick={() => router.push("Search_filter")}>FilterSearch</p>
        <p className='border-2 border-pink-400 bg-purple-200 hover:bg-purple-400 flex p-4 w-full h-[200%] justify-center items-center rounded-lg shadow-xl text-purple-900' onClick={() => router.push("ungusolih")}>Color change</p>
        <p className='border-2 border-pink-400 bg-purple-200 hover:bg-purple-400 flex p-4 w-full h-[200%] justify-center items-center rounded-lg shadow-xl text-purple-900' onClick={() => router.push("weather")}>Weather</p>
        <p className='border-2 border-pink-400 bg-purple-200 hover:bg-purple-400 flex p-4 w-full h-[200%] justify-center items-center rounded-lg shadow-xl text-purple-900' onClick={() => router.push("biydaalt")}>biy daalt</p>
  </div> 
   </div>
    );
}