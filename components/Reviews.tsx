import React from "react";

const Reviews = () => {
  return (
    <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div className="relative w-full p-3 rounded  md:p-8">
          <div className="rounded-lg bg-white text-black w-full">

            <img src="/Group 2.svg" className="" />
          </div>
        </div>
      </div>
      <div className="flex items-center md:-mt-64 py-5 md:w-1/2 md:pb-10 md:pt-10 md:pr-10">
        <div className="md:text-left xs:text-center">
          <h2 className="text-2xl font-medium leading-10 tracking-tight text-gray-800 sm:text-2xl sm:leading-none md:text-3xl">
            We've stopped counting.
          </h2>
          <h2 className="text-2xl font-medium leading-10 tracking-tight text-gray-800 sm:text-2xl sm:leading-none md:text-3xl">
            Over 500 brands count on us.
          </h2>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Our 4,000+ team has expertise in almost everyprogramming language.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
