import React from "react";

const Brands = () => {
  return (
    <section className="bg-white dark:bg-gray-200 rounded-3xl md:m-10 xs:-mt-[700px]">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl tracking-tight leading-tight text-center text-gray-900 dark:text-black md:text-4xl">
          Choose Us: Your Path to Innovation and
        </h2>
        <h2 className="mb-8 lg:mb-16 tracking-tight text-center text-blue-500 dark:text-blue md:text-4xl -mt-10">
          Success
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-4">
          <div className="relative flex md:w-[300px] flex-col bg-clip-border rounded-3xl bg-transparent text-gray-700 shadow-md relative grid h-[200px] items-end overflow-hidden">
            <div className="absolute inset-0 bg-white/70"></div>
            <div className="p-6 relative flex flex-col justify-end">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-black">
                Expertise Across the Tech Spectrum
              </h4>
              <p className="block antialiased font-sans font-light leading-relaxed text-black font-normal">
                Our team consists of seasoned developers, designers, and experts
                who excel in various areas of technology.
              </p>
            </div>
          </div>
          <div className="relative flex md:w-[300px] md:h-[200px] flex-col bg-clip-border rounded-3xl bg-transparent text-gray-700 shadow-md relative grid items-end overflow-hidden">
            <div className="absolute inset-0 bg-green-400"></div>
            <div className="p-6 relative flex flex-col justify-end">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-black">
                Proven Track Record of Success:
              </h4>
              <p className="block antialiased font-sans text-base font-light leading-relaxed text-black my-2 font-normal">
                Our portfolio is a testament to our ability to deliver impactful
                results.
              </p>
            </div>
          </div>
          <div className="relative flex md:w-[300px] md:h-[200px] flex-col bg-clip-border rounded-3xl bg-transparent text-gray-700 shadow-md relative grid items-end overflow-hidden">
            <div className="absolute inset-0 bg-white/70"></div>
            <div className="p-6 relative flex flex-col justify-end">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-black">
                Collaborative Approach, Transparent Communication:
              </h4>
              <p className="block antialiased font-sans text-base font-light leading-relaxed text-black my-2 font-normal">
                We believe in working hand-in-hand with our clients.
              </p>
            </div>
          </div>
          <div className="relative flex md:w-[300px] md:h-[200px] flex-col bg-clip-border rounded-3xl bg-transparent text-gray-700 shadow-md relative grid items-end overflow-hidden">
            <div className="absolute inset-0 bg-blue-400"></div>
            <div className="p-6 relative flex flex-col justify-end">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-black">
                Tailored Solutions for Your Unique Needs:
              </h4>
              <p className="block antialiased font-sans text-base font-light leading-relaxed text-black my-2 font-normal">
                We understand that no two projects are alike.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-8 pr-10">
        <button
            type="button"
            className="absolute z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-white-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute pl-36 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-white-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Brands;
