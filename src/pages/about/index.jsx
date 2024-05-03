import React, {useRef, useEffect} from "react";



export default function About() {


  return (
    <main className="">
      <div className="w-screen h-[200px] bg-slate-500"></div>
      <div className="w-screen h-[200px] bg-red"></div>
      <div className="w-screen h-[200px] bg-dark"></div>
      <div className="w-screen h-[200px] bg-off-white"></div>
      <div className="w-screen h-[200px] bg-black"></div>
      <div className="w-screen h-[200px] bg-blue-500"></div>
      <div ref={ref} className={`${isInView === true  ? "bg-dark" : "bg-white" }w-screen h-[200px] flex items-center justify-center`}>
        <p>Hejsa!</p>
      </div>
    </main>
  );
};