import React from "react";
import icon from "../Assets/youtube.png";

export default function Headers(){

   return <header className="h-14 bg-slate-600 p-4 flex justify-evenly">
   <div className="flex">
     <img className="h-8" src={icon} alt="icon"/>
     <h2 className="text-white text-[1.5rem] font-bold">YouTube</h2>
   </div>
    </header>

}