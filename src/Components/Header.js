import React, { useState,useEffect } from "react";
import icon from "../Assets/youtube.png";
import menu from "../Assets/menu.png";
import searchbutton from "../Assets/search.png";
import mic from "../Assets/mic.png";
import dots from "../Assets/dots.png";
import User from "./User";
import { Link } from "react-router-dom";
import Speech from "./Speech";

export default function Headers({update}) {
  const [isExpanded,setExpanded]=useState(false);
  const [listening,setListening]=useState(false);
  const toggleExpand=()=>{
    setExpanded(!isExpanded);
  }

  const [value,setValue]=useState("");
  function handleSearch(event){
    setValue(event.target.value);
  }
  function handleClick(){
    update(value);
  }
  function handleKey(event){
       if(event.key==="Enter"){
        handleClick();
       }
  }
  function handleListen(){
     setListening(!listening);
  }


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('button') === null) {
        setListening(false);
        setExpanded(false);
      }
    };
  
    document.addEventListener('click', handleClickOutside);
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="h-12 flex justify-between px-2.5 fixed z-50 bg-black w-screen">
      <div className="flex items-center">
        <div className="py-2.5 px-2 mr-2 h-10 w-10 rounded-full hover:bg-[rgb(255,255,255,0.2)]">
          <img src={menu} alt="menu icon" className="h-5 w-5" />
        </div>
        <Link to="/">
        <div className="flex items-center h-5 w-[5.5rem]">
          <img src={icon} alt="youtube_icon" className="h-6 icon-container" />
          <h1 className="text-white font-semibold text-base pl-0.5 pb-2 font-['Oswald']">YouTube<span className="align-super text-[0.5rem] p-1 text-white opacity-70">IN</span></h1>
        </div>
        </Link>
      </div>

      <div className="flex m-2" title="Search">
        <div>
          <input
            type="search"
            placeholder="Search"
            className="w-[27rem] h-8 rounded-l-3xl bg-inherit border-2 border-white border-opacity-25 px-4 text-white"
            onChange={handleSearch}
            onKeyDown={handleKey}
          />
        </div>
        <div className="bg-[rgb(255,255,255,0.15)] h-8 w-12 rounded-r-3xl  border-y-2 border-r-2 border-white border-opacity-25 px-2 ">
         <button type="button" onClick={handleClick} onKeyDown={handleKey}>
          <img src={searchbutton} alt="search_button" className="p-2" />
          </button>
        </div>
        <button onClick={handleListen} title="Search with your voice">
        <div className="h-8 w-8 rounded-full ml-4 bg-[rgb(255,255,255,0.15)] hover:bg-[rgb(255,255,255,0.3)] flex justify-center items-center">
        <img src={mic} alt="mic" className="h-4" />
          {listening ? <Speech onClose={handleListen} update={update}/> : <></>}
        </div>
        </button>
      </div>

      <div className="flex m-3">
      <Link to='/login'>
      <div className="w-14 bg-white rounded-xl mx-2 font-medium text-base px-2.5">login</div>
      </Link>
        <button onClick={toggleExpand} className="">
         <img src={dots} alt="menu"/>
         {isExpanded && (
          <div className="overlay">
          <User />
          </div>
         )}
        </button>
        
      </div>
    </header>
  );
}
