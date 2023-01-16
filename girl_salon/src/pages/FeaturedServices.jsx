import React from "react";
import Image1 from "../images/image 1.png";
import Image2 from "../images/image 2.png";
import Image3 from "../images/image 3.png";
function FeaturedServices() {
  return (
    <>
      <div className="justify-center   items-center flex  flex-wrap  gap-10">
        <div className="md:w-[1280px] w-96">
          <h2 className="text-5xl flex justify-center items-center">
            Featured Services
          </h2>
          <div className=" flex flex-wrap justify-evenly items-center gap-10 md:mx-0 mx-10 md:my-10 my-5">
            <div className="bg-slate-100  rounded-lg md:w-[300px] w-96  flex flex-col gap-5 md:py-5 py-3">
              <div className="flex justify-center w-full">
                <img src={Image1} alt="" />
              </div>
              <div className=" font-bold text-2xl">Barber Razor</div>
              <div className="md:w-fit">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                exercitationem quae id dolorum debitis.
              </div>
              <div className="text-green-400">$29</div>
            </div>
            <div className="bg-slate-100  rounded-lg md:w-[300px] w-96  flex flex-col gap-5 md:py-5 py-3">
              <div className="flex justify-center w-full">
                <img src={Image2} alt="" />
              </div>
              <div className=" font-bold text-2xl">Barber Razor</div>
              <div className="md:w-fit">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                exercitationem quae id dolorum debitis.
              </div>
              <div className="text-green-400">$29</div>
            </div>
            <div className="bg-slate-100  rounded-lg md:w-[300px] w-96  flex flex-col gap-5 md:py-5 py-3">
              <div className="flex justify-center w-full">
                <img src={Image3} alt="" />
              </div>
              <div className=" font-bold text-2xl">Barber Razor</div>
              <div className="md:w-fit">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                exercitationem quae id dolorum debitis.
              </div>
              <div className="text-green-400">$29</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedServices;
