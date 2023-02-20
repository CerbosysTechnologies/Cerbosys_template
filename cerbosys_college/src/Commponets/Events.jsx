import React from 'react';

function Events() {
  return (
    <div>
      <div className=" bg-black w-ful md:py-10 text-white  md:my-1 my-5">
        <div className="flex justify-center items-center my-10 py-10">
          <div className=" justify-center items-center">
            <div className="font-bold text-4xl flex justify-center items-center">
              Upcoming Events
            </div>
            <div className="text-sm italic flex justify-center items-center">
              Replenish man have thing gathering lights yielding shall you
            </div>
          </div>
        </div>
        <div className=" flex justify-center gap-10 ">
          <div className="flex justify-around flex-wrap  gap-20">
            <div className="flex flex-col justify-center items-center gap-10 md:px-1 px-5">
              <div className=" mx-auto md:w-[38rem] md:h-[30rem] w-96 h-96 py-12 px-4 bg-Emeve1 bg-cover md:bg-top bg-center"></div>
            </div>
            {/* -------------------------- */}

            <div class="flex flex-col items-center justify-center  ">
              <div className="mx-auto  md:w-[38rem] md:h-[30rem] w-96 h-96 py-12 px-10 bg-Emeve2 bg-cover md:bg-top bg-center "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
