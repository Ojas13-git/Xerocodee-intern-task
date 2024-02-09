import React from "react";

const Crew = () => {
  return (
    <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
    <div className="text-center">
      <img className="rounded-full w-30 h-30 mx-auto shadow-md" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      
    </div>
    

    <div className="text-center">
      <img className="rounded-full w-30 h-30  mx-auto shadow-md" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      
    </div>
    

    <div className="text-center">
      <img className="rounded-full w-30 h-30  mx-auto shadow-md" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      
    </div>
    

    <div className="text-center">
      <img className="rounded-full w-30 h-30  mx-auto shadow-md" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      
    </div>
    

    <div className="text-center">
      <img className="rounded-full w-30 h-30  mx-auto shadow-md" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      
    </div>
    
  </div> */}
      <img src="/crew.svg" alt="" />

      <div className="mt-12 flex justify-center">
        <div className="flex items-center gap-x-3">
          <h1 className="text-3xl text-gray-700">Let's Form Your Crew.</h1>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="flex items-center gap-x-3">
          <button className="rounded-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4">
            Our full repertorie
          </button>
        </div>
      </div>
    </div>
  );
};

export default Crew;
