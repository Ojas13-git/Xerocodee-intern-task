import React from "react";

const Teams = () => {
  return (
    <>
      <h1 className="p-2 font-medium text-2xl md:text-center xs:text-left sm:p-8">
        We have multidisciplinary teams to meet any{" "}
        <span className="text-[#aa00ff]">challenge.</span>
      </h1>
      <div className="grid md:grid-cols-3 max-w-screen-lg mx-auto gap-10 mt-4 p-8  shadow-2xl rounded-[25px] sm:grid-cols-1">
        <div className="flex gap-4 items-start flex-col ">
          <span className="p-3">
            <img src="/monitor.svg" alt="" />
          </span>
          <div>
            <h3 className="font-semibold text-xl">Front-end</h3>
            <p className="mt-1 text-base font-normal text-gray-500">
              {" "}
              Our frontend developers understand the delicate balance between
              aesthetics and functionality.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start flex-col ">
          <span className="p-3">
            <img src="/simcard.svg" alt="" />
          </span>
          <div>
            <h3 className="font-semibold text-xl">Back-end</h3>
            <p className="mt-1 text-base font-normal text-gray-500">
              Our backend developers are the architects of efficiency and
              security. They design and build the databases andAPIs.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start flex-col ">
          <span className="p-3">
            <img src="/driver.svg" alt="" />
          </span>
          <div>
            <h3 className="font-semibold text-xl">Data Analysts</h3>
            <p className="mt-1 text-base font-normal text-gray-500">
              Our data analytics team is a blend of mathematicians,
              statisticians, and technology enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
