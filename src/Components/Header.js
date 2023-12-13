import React from "react";
import icon from "../Assets/youtube.png";
import menu from "../Assets/menu.png";
import searchbutton from "../Assets/search.png";
import mic from "../Assets/mic.png";
import videoimg from "../Assets/video-call.png";
import bell from "../Assets/bell.png";

export default function Headers() {
 
  return (
    <header className="h-14 flex justify-between px-4">
      <div className="flex items-center">
        <div className="p-2 h-10 w-10">
          <img src={menu} alt="menu icon" className="h-6 w-6" />
        </div>
        <div className="flex items-center h-5 w-[5.5rem]">
          <img src={icon} alt="youtube_icon" className="h-6" />
          <h1 className="text-white font-semibold text-lg">YouTube</h1>
        </div>
      </div>

      <div className="flex m-3">
        <div>
          <input
            type="search"
            placeholder="Search"
            className="w-[29rem] h-8 rounded-l-3xl bg-inherit border-2 border-white border-opacity-25 px-4 text-white"
          />
        </div>
        <div className="bg-[dimgray] h-8 w-12 rounded-r-3xl  border-y-2 border-r-2 border-white border-opacity-25 px-2 ">
         <button type="button">
          <img src={searchbutton} alt="search_button" className="p-2" />
          </button>
        </div>
        <div className="h-8 w-8 rounded-full ml-4 bg-[dimgray]">
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
