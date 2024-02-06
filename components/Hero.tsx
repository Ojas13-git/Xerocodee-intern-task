import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[url(/hero2.jpg)] bg-right bg-no-repeat mr-8 ml-8">
      <div className="absolute inset-0 bg-white/75 md:bg-transparent sm:bg-transparent md:from-white/25 sm:from-white/25 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="text-left ltr:sm:text-left rtl:sm:left">
        <span className="text-sm text-yellow-500 font-semibold leading-6 mb-20">TECH SERVICES</span>
          <h1 className="text-3xl mt-2 sm:text-5xl">
            TechSynergy:
          </h1>
          <h1 className="text-3xl mt-2 sm:text-5xl">
            Innovate,
          </h1>
          <h1 className="text-3xl mt-2 sm:text-5xl">
            Create, Elevate
          </h1>

          <p className="mt-10 text-2xl max-w-lg sm:text-xl/relaxed">
          Unlocking Possibilities, One Code at a Time
          </p>

          <div className="mt-10 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block rounded-full bg-green-400 px-12 py-3 text-sm font-medium text-white shadow focus:outline-none sm:w-auto"
            >
              See Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
