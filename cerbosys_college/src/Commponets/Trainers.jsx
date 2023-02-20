import React from 'react';
import T1 from '../Image/t1.jpg.png';
import T2 from '../Image/t2.jpg.png';
import T3 from '../Image/t3.jpg.png';
import T4 from '../Image/t4.jpg.png';

function Trainers() {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center my-10">
          <div className=" justify-center items-center">
            <div className="font-bold text-4xl flex justify-center items-center">
              Our Expert Trainers
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
              <a href="#" className="flex justify-center items-center">
                <img
                  className="rounded-t-lg w-[300px] h-[250px] object-contain"
                  src={T1}
                  alt=""
                />
              </a>

              <div className="p-5">
                <a href="#" className="text-center">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Mated Nithan
                  </h5>
                </a>
                <div className="text-center text-xs my-2">Sr. web designer</div>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400  flex flex-wrap md:w-56 text-justify">
                  If you are looking at blank cassettes on the web, you may be
                  very confused at the.
                </p>
              </div>
            </div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#" className="flex justify-center items-center">
                <img
                  className="rounded-t-lg w-[300px] h-[250px] object-contain"
                  src={T2}
                  alt=""
                />
              </a>

              <div className="p-5">
                <a href="#" className="text-center">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    David Cameron
                  </h5>
                  <div className="text-center text-xs my-2">
                    Sr. web designer
                  </div>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400  flex flex-wrap md:w-56 text-justify">
                  If you are looking at blank cassettes on the web, you may be
                  very confused at the.
                </p>
              </div>
            </div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#" className="flex justify-center items-center">
                <img
                  className="rounded-t-lg w-[300px] h-[250px] object-contain"
                  src={T3}
                  alt=""
                />
              </a>

              <div className="p-5">
                <a href="#" className="text-center">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Nathan Macken
                  </h5>
                  <div className="text-center text-xs my-2">
                    Sr. web designer
                  </div>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify flex flex-wrap md:w-56">
                  If you are looking at blank cassettes on the web, you may be
                  very confused at the.
                </p>
              </div>
            </div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#" className="flex justify-center items-center">
                <img
                  className="rounded-t-lg  w-[300px] h-[250px] object-contain"
                  src={T4}
                  alt=""
                />
              </a>

              <div className="p-5">
                <a href="#" className="text-center">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Jain Redmel
                  </h5>
                  <div className="text-center text-xs my-2">
                    Sr. Faculty Data Science
                  </div>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify flex flex-wrap md:w-56">
                  If you are looking at blank cassettes on the web, you may be
                  very confused at the.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
