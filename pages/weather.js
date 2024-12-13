import Image from "next/image";
import localFont from "next/font/local";
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full h-screen bg-slate-950 flex items-center justify-center">
   <button className="border-2 border-white text-white p-8 rounded-md text-xl hover:bg-purple-300 shadow-md shadow-white" onClick={() => router.back()}>
        Back
      </button>
    </div>
  );
}
