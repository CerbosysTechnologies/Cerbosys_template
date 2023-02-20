import React from 'react';

function Hero() {
  return (
    <div>
      <div className="mx-auto w-full md:h-[38rem]  h-96 py-12 px-4 bg-Hero bg-cover md:bg-top bg-center">
        {/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center md:h-[20rem]  mx-auto">
          <p className=" text-center text-black font-bold font-subheading   md:text-lg text-xs md:w-[980px] max-w-fit">
            Best online education service In the world
          </p>
          <h1 className="text-black font-bold uppercase font-heading py-2 md:text-3xl text-xl mb-3">
            One Step Ahead This Season
          </h1>
          <p className=" text-center text-white flex gap-10   md:text-lg text-xs md:w-[980px] max-w-fit">
            <div className="font-bold bg-black px-5 py-5 rounded-lg">
              learn more
            </div>
            <div className="font-bold bg-yellow-300 px-5 py-5 rounded-lg">
              see course
            </div>
          </p>
        </div>
        {/* Content Section Ends*/}
      </div>
    </div>
  );
}

export default Hero;
