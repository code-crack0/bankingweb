import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Cards = () => {
  return (
    // Use tailwind grid to make three responsive Cards with a background image and content on top
    <div id="cards" className="grid grid-cols-1  md:grid-cols-3 gap-4 bg-white p-5  backdrop-brightness-50">
      <div
        id="family1"
        className="flex flex-col items-center justify-start backdrop-brightness-50  rounded-lg py-[100px] md:hover:-translate-y-4 transition duration-300"
      >
        <h1 className="text-4xl font-bold text-white p-5">
          Wealth & Insurance
        </h1>
        <span className="text-white text-2xl p-2 text-center">
          Grow your wealth, secure your dreams and also prepare for the
          unexpected with our wealth and insurance services
        </span>
        <span className="text-white text-xl hover:underline cursor-pointer">
          Know More &gt;
        </span>
      </div>
      <div
        id="family2"
        className="flex flex-col items-center justify-start backdrop-brightness-50  rounded-lg py-[100px] md:hover:-translate-y-4 transition duration-300"
      >
        <h1 className="text-4xl font-bold text-white p-5">Credit Cards</h1>
        <p className="text-white text-2xl p-2 text-center">
          Let us help you find the right card
        </p>
        <span className="text-white text-xl hover:underline cursor-pointer">
          Know More &gt;
        </span>
      </div>
      <div
        id="family3"
        className="flex flex-col items-center justify-start backdrop-brightness-50  rounded-lg py-[100px] md:hover:-translate-y-4 transition duration-300 "
      >
        <h1 className="text-4xl font-bold text-white p-5">Loans</h1>
        <span className="text-white text-2xl p-2 text-center">
          Explore from a wide range that suits your needs at an affordable rate
        </span>
        <span className="text-white text-xl hover:underline cursor-pointer">
          Know More &gt;
        </span>
      </div>
    </div>
  );
};

export default Cards;
