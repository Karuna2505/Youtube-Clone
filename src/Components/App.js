import React from "react";
import Header from "./Header";
import YTvideos from "../ytvideos";

function App() {
  return (
    <>
    <Header />
    <div className="flex flex-row p-14">
    <YTvideos />
    </div>
    </>
  );
}

export default App;
