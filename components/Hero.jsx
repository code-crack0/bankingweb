import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute -z-10 object-cover w-screen h-screen brightness-50"
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
      </video>

      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          DIGITIZE YOUR FAMILY WITH OUR FAMILY ORIENTED ACCOUNTS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Simpler. Better. Smarter.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">
            Fast, flexible financing for your
          </p>
          <Typed
            className="md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2"
            strings={["Father", "Mother", "Wife", "Children"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your family financing by managing your bills, transfers,
          debits and family's accounts all from one place.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
