import React from "react";
import assets from "../assets/assets";

const HomeSection = () => {
  return (
    <div
      className=" w-full h-screen flex  items-center justify-center"
      style={{
        background: "linear-gradient(180deg, #2A1137 49.58%, #1F3442 100%)",
      }}
    >
      <div className="flex justify-around w-full h-full px-28">
        <div className="flex flex-col justify-center gap-10 items-start">
          <h1 className=" font-roboto-slab font-light text-white text-5xl ">
            Redefining limits beyond bits and bytes.
          </h1>
          <div className="flex gap-5 items-center bg-white rounded-2xl p-3 px-6 text-[20px]">
            <button className="">Connect with us</button>
            <img className="" src={assets.next_button} alt="" />
          </div>
        </div>
        <div className="">
          <img className="w-[100%] h-[100%]" src={assets.molecule} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
