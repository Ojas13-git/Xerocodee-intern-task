import React from "react";

const Slider = () => {
  return (
    <div className="flex justify-center w-full h-full px-4 md:p-32 md:-mt-[450px] -mt-[700px]">
      <div className="w-full relative flex items-center justify-center">
        {/* <button
          aria-label="slide backward"
          className="absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
          id="prev"
        >
          <svg
            className="dark:text-gray-900"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1L1 7L7 13"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button> */}
        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
          <div
            id="slider"
            className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
          >
            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
              <img
                src="/f1.png"
                alt="black chair and white table"
                className="object-cover object-center w-full"
              />
            </div>
            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
              <img
                src="/f2.png"
                alt="sitting area"
                className="object-cover object-center w-full"
              />
            </div>
            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
              <img
                src="/f3.png"
                alt="sitting area"
                className="object-cover object-center w-full"
              />
            
            </div>
            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
              <img
                src="f4.png"
                alt="sitting area"
                className="object-cover object-center w-full"
              />
            </div>
            
          </div>
        </div>
        {/* <button
          aria-label="slide forward"
          className="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          id="next"
        >
          <svg
            className="dark:text-gray-900"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L1 13"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button> */}
      </div>
    </div>
    
  );
};

export default Slider;
