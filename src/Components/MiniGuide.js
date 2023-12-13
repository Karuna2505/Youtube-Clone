import React from "react";
import home from "../Assets/home.png";
import subscribe from "../Assets/subscribe.png";
import video from "../Assets/video.png";

function MiniGuide() {
  return (
    <div className="text-white w-16 flex flex-col items-center px-2">
      <div className="h-[73px] py-4 flex flex-col justify-center items-center">
        <img src={home} alt="Home" className="h-4 w-4"/>
        <span className="text-xs font-normal">Home</span>
      </div>
      <div className="h-[73px] py-4 flex flex-col justify-center items-center">
        <img src={subscribe} alt="Subscribe" className="h-4 w-4"/>
        <span className="text-xs font-normal">Shorts</span>
      </div>
      <div className="h-[73px] py-4 flex flex-col justify-center items-center">
        <img src={subscribe} alt="Subscribe" className="h-4 w-4"/>
        <span className="text-xs font-normal">Subscriptions</span>
      </div>
      <div className="h-[73px] py-4 flex flex-col justify-center items-center">
        <img src={video} alt="video" className="h-4 w-4"/>
        <span className="text-xs font-normal">You</span>
      </div>
    </div>
  );
}

export default MiniGuide;
