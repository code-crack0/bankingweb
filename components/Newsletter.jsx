import React from 'react';
import Link from 'next/link';
const Newsletter = () => {
  return (
    <div id="news" className="w-full py-16 text-white px-4 bg-black ">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">
            Have Questions? Our Employees are here to help 24/7.
          </h1>
          <p>Write in your email and our team will get back to you.</p>
          <p className=" text-xl">
            You can also read the{" "}
            <Link className="text-[#00df9a] hover:underline" href="/faq">
              FAQ's
            </Link>
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Contact Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a] hover:underline cursor-pointer">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
