import React from 'react';
import Image1 from '../Image/c2.jpg.png';
import Image2 from '../Image/c3.jpg.png';
import Image3 from '../Image/c1.jpg.png';
import A1 from '../Image/author2.png';
import SPAN from '../Image/span.png';
function Courses() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center my-10">
          <div className=" justify-center items-center">
            <div className="font-bold text-4xl flex justify-center items-center">
              Our Popular Courses
            </div>
            <div className="text-sm italic flex justify-center items-center">
              Replenish man have thing gathering lights yielding shall you
            </div>
          </div>
        </div>
        {/* conttents start  */}
        <div className="flex justify-center items-center ">
          <div className="flex justify-evenly items-center flex-wrap gap-5 container">
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src={Image1} alt="" />
              </a>

              <div className="flex  justify-between items-center px-5">
                <button className="bg-black py-2 px-5 text-white my-5 mx-5">
                  design
                </button>
                <div>
                  <img
                    className="w-20 h-20  rounded-full shadow-lg"
                    src={SPAN}
                    alt="Bonnie image"
                  />
                </div>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order
                </p>
              </div>
              <div className="flex  gap-20 justify-center items-center pb-10">
                <img
                  className="w-10 h-10 mb-3 rounded-full shadow-lg"
                  src={A1}
                  alt="Bonnie image"
                />
                <span className="text-sm text-black font-bold ">Cameron</span>
                <div className="flex  space-x-3 font-bold ">
                  <a>32</a>
                  <a>10</a>
                </div>
                {/* ------------- */}
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src={Image2} alt="" />
              </a>

              <div className="flex  justify-between items-center px-5">
                <button className="bg-black py-2 px-5 text-white my-5 mx-5">
                  design
                </button>
                <div>
                  <img
                    className="w-20 h-20  rounded-full shadow-lg"
                    src={SPAN}
                    alt="Bonnie image"
                  />
                </div>
              </div>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order
                </p>
              </div>
              <div className="flex  gap-20 justify-center items-center pb-10">
                <img
                  className="w-10 h-10 mb-3 rounded-full shadow-lg"
                  src={A1}
                  alt="Bonnie image"
                />
                <span className="text-sm text-black font-bold ">Cameron</span>
                <div className="flex  space-x-3 font-bold ">
                  <a>32</a>
                  <a>10</a>
                </div>
                {/* ------------- */}
              </div>
            </div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src={Image3} alt="" />
              </a>

              <div className="flex  justify-between items-center px-5">
                <button className="bg-black py-2 px-5 text-white my-5 mx-5">
                  design
                </button>
                <div>
                  <img
                    className="w-20 h-20  rounded-full shadow-lg"
                    src={SPAN}
                    alt="Bonnie image"
                  />
                </div>
              </div>

              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order
                </p>
              </div>
              <div className="flex  gap-20 justify-center items-center pb-10">
                <img
                  className="w-10 h-10 mb-3 rounded-full shadow-lg"
                  src={A1}
                  alt="Bonnie image"
                />
                <span className="text-sm text-black font-bold ">Cameron</span>
                <div className="flex  space-x-3 font-bold ">
                  <a>32</a>
                  <a>10</a>
                </div>
                {/* ------------- */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
