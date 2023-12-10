import React from "react";
import Header from "./Header";
import YTvideos from "../ytvideos";
import Content from "./Content";

function App() {
  return (
    <>
    <Header />
    <Content />
    <div className="flex flex-row p-14">
    <YTvideos />
    </div>
    </>
  );
}

export default App;
