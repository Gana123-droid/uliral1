import Image from "next/image";
import { useState } from "react";

export default function Homepage() {
  return (
   <div className="h-screen w-full bg-sky-100 pt-20 px-4">
    <div className="w-full h-20 bg-blue-600 flex justify-center items-center text-xl font-stretch-expanded text-white">
        <p>Next high school</p>
    </div>
    <div className="pt-10 text-black font-bold text-4xl text-center">Welcome to Nest school</div>
    <div className="text-black flex text-center justify-center pt-5 font-stretch-expanded">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the<br></br> industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery </div>
    <div className="h-16 bg-black mt-6"></div>
    <div className="h-60 max-w-full mx-96 mt-16 grid grid-cols-3 gap-8 text-black text-center">
   <div className="bg-white"> 
    <h1 className="font-bold text-lg flex items-around justify-center mt-2">Why choose Us?</h1>
    <ol className="flex justify-center grid grid-rows-5 gap-2">
    <li class="flex items-center text-sm font-serif">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
</svg>

        High Performance
    </li>
    <li class="flex items-center text-sm font-serif">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
</svg>

        Responsive Design
    </li>
    <li class="flex items-center text-sm font-serif">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
</svg>

        Easy to Use
    </li>
    <li class="flex items-center text-sm font-serif">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
</svg>

        Scalable Solutions
    </li>
    <li class="flex items-center text-sm font-serif">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
</svg>

       24/7 support
    </li>
    </ol>
    </div>
   <div className="bg-white">
   <h1 className="font-bold text-lg flex items-around justify-center mt-2">Our Features</h1>
   <p>Fast and Lightweight</p>
   <p>Mobile-First Aproach</p>
   <p>Customizable UI</p>
   <p>Secure and Reliable</p>
   <p>Global Reach</p>
   </div>
   <div className="bg-white"></div>

    </div>
   </div>
  );
}