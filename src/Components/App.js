import React from "react";
import Header from "./Header";
import YTvideos from "../ytvideos";
import Content from "./Content";
import MiniGuide from "./MiniGuide";

function App() {
  return (
    <>
    <Header />
    <div className="flex">
    <MiniGuide />
    <div className="flex flex-col">
       <Content />
       <YTvideos />
    </div>
    </div>
    </>
  );
}

export default App;
