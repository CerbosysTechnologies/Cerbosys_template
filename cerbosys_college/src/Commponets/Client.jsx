import React from 'react';
import T3 from '../Image/t3.jpg.png';
import T2 from '../Image/t2.jpg.png';
function Client() {
  return (
    <div>
      <div className="my-10">
        <div>
          <div className="flex justify-center items-center my-10">
            <div className=" justify-center items-center">
              <div className="font-bold text-4xl flex justify-center items-center">
                Client say about me
              </div>
              <div className="text-sm italic flex justify-center items-center">
                Replenish man have thing gathering lights yielding shall you
              </div>
            </div>
          </div>
          {/* conttents start  */}
          <div className="flex justify-center  items-center">
            <div className="flex container flex-wrap">
              <a href="#" class="flex  items-center flex-wrap ">
                <img
                  class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={T3}
                  alt=""
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Elite Martin
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Him, made can't called over won't there on divide there male
                    fish beast own his day third seed sixth seas unto. Saw from
                  </p>
                </div>
              </a>
              <a href="#" class="flex  items-center flex-wrap ">
                <img
                  class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={T2}
                  alt=""
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Davil Saden
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Him, made can't called over won't there on divide there male
                    fish beast own his day third seed sixth seas unto. Saw from
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
