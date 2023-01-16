import React from "react";

function Home() {
  return (
    <div>
      <div className="mx-auto w-full md:h-[60rem]  h-96 py-12 px-4 bg-Hero bg-cover md:bg-top bg-center">
        <div className="md:mt-[500px] mt-20">
          <p className="text-white font-heading py-2 md:text-3xl text-xl mb-10 ">
            Welcome to SALON - E
          </p>
          <p className="text-white font-heading py-2 md:text-6xl text-2xl mb-10 ">
            Hair Salon Expert
          </p>
          <button
            className="bg-Primary rounded-full  md:px-5 md:py-2 md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-6  bg-black"
          >
            Book Now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
