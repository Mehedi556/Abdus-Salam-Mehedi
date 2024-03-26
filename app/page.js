"use client";
import React from "react";
import Lottie from "lottie-react";
import animation from "../public/build-animation.json";

export default function Home() {
  return (
    <div className="w-full h-screen bg-slate-900 flex flex-col justify-center items-center">
      <div className="w-[400px] h-[200px] flex justify-center items-center mr-14">
        <Lottie animationData={animation} loop={true} />
      </div>

      <p className="text-center text-3xl font-medium py-4 px-8 text-gray-200">
        <span className="text-5xl">Hi</span> there <br /> <br /> Welcome to
        my Portfolio.. <br /> <br /> My homepage is currently under construction
        and will be back soon with a fresh new design!
      </p>
    </div>
  );
}
