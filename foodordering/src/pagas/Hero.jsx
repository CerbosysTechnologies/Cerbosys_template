import React from "react";

function Hero() {
  return (
    <div>
<div className="mx-auto w-full md:h-[40rem]  h-96 py-12 px-4 bg-Hero bg-cover md:bg-top bg-center">      
        <div className=" md:mx-60 mx-32 md:my-16 my-16">
          <p className="text-black font-bold py-2 md:text-3xl text-xl mb-10 ">
            Fresh <span className="text-pink-500">food delivery </span> <br />
            from your favorite bistro?
          </p>
          <p className="text-black  py-2   mb-10  flex  gap-10 ">
            <div>
              <button className="bg-pink-500 md:px-5 px-5 md:py-3 py-3 rounded-md">
                Order Now{" "}
              </button>
            </div>
            <div>
              <button className="bg-slate-400 md:px-5 px-5 md:py-3 py-3 rounded-md">
                How it Works{" "}
              </button>
            </div>
          </p>
          <div
            className="bg-Primary rounded-lg md:my-32  md:px-5 md:py-10 md:text-lg
               uppercase px-3 py-1.5 text-xs   bg-white  shadow-xl  "
          >
          <div className="flex flex-wrap justify-between ">
            <div className="flex justify-evenly gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Search products…"
                  className=" "
                />
              </div>
              <div className="bg-pink-500 text-pink-500 md:px-10 px-5">11</div>
            </div>

            <div className="flex justify-evenly gap-5">
              <div>
                <select name="" id="" className="md:w-[300px]">
                  <option value="1">one </option>
                  <option value="2">two</option>
                  <option value="3">three</option>
                </select>
              </div>
              <div>
                <div className="bg-pink-500 text-pink-500 md:px-10 px-5">11</div>
              </div>
            </div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
