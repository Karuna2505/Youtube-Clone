import React,{useState} from "react";
import Header from "./Header";
import YTvideos from "../ytvideos";
import Content from "./Content";
import MiniGuide from "./MiniGuide";

function App() {
  const [query,setQuery]=useState("");

  const update=(newData)=>{
    setQuery(newData);
  }
  return (
    <>
    <Header update={update} query={query}/>
    <div className="flex">
    <MiniGuide />
    <div className="flex flex-col">
       <Content />
       <YTvideos update={update} query={query}/>
    </div>
    </div>
    </>
  );
}

export default App;
