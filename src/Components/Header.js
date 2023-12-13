import React,{useState} from "react";
import icon from "../Assets/youtube.png";
import menu from "../Assets/menu.png";
import searchbutton from "../Assets/search.png";
import mic from "../Assets/mic.png";
import videoimg from "../Assets/video-call.png";
import bell from "../Assets/bell.png";

export default function Headers() {
  const [value,setValue]=useState("");
  const [query,setQuery]=useState("");
  function handleChange(event){
     setValue(event.target.value);
  }

  function handleClick(){
     setQuery(value);
  }
  function handleKey(event){
       if(event.key==="Enter"){
          handleClick();
       }
  }
  return (
    <header className="h-14 flex justify-between px-3 w-screen">
      <div className="flex items-center">
        <div className="py-2.5 px-2 mr-2 h-10 w-10 rounded-full hover:bg-[rgb(255,255,255,0.2)]">
          <img src={menu} alt="menu icon" className="h-5 w-5" />
        </div>
        <div className="flex items-center h-5 w-[5.5rem]">
          <img src={icon} alt="youtube_icon" className="h-6" />
          <h1 className="text-white font-semibold text-lg pl-1 pb-2">YouTube<span className="align-super text-[0.7rem] p-1 text-white opacity-70">IN</span></h1>
          
        </div>
      </div>

      <div className="flex m-3">
        <div>
          <input
            type="search"
            placeholder="Search"
            className="w-[29rem] h-8 rounded-l-3xl bg-inherit border-2 border-white border-opacity-25 px-4 text-white"
            onChange={handleChange}
            onKeyDown={handleKey}
          />
        </div>
        <div className="bg-[rgb(255,255,255,0.15)] h-8 w-12 rounded-r-3xl  border-y-2 border-r-2 border-white border-opacity-25 px-2 ">
         <button type="button" onClick={handleClick} onKeyDown={handleKey}>
          <img src={searchbutton} alt="search_button" className="p-2" />
          </button>
        </div>
        <div className="h-8 w-8 rounded-full ml-4 bg-[rgb(255,255,255,0.15)] hover:bg-[rgb(255,255,255,0.3)]">
          <img src={mic} alt="mic" className="h-6 m-1 p-0.5" />
        </div>
      </div>

      <div className="flex m-4">
        <img src={videoimg} alt="video_icon" className="h-6 pr-4" />
        <img src={bell} alt="bell_icon" className="h-6 pr-4" />
        <div className="bg-white h-6 w-6 rounded-full"></div>
      </div>
    </header>
  );
}
