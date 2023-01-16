import React from "react";
import figure from "../images/figure.png";
function WelcomePage() {
  return (
    <div className="justify-center   items-center flex  flex-wrap  gap-10">
      <div className="md:w-[1280px] w-96 md:mx-0 mx-2 flex justify-center items-center ">
        <div className="flex flex-wrap justify-between  gap-20 md:my-10 my-5">
          <div className="md:w-[300px] w-96 md:h-[350px] flex flex-col justify-center items-center gap-5">
            <h2 className="font-bold text-3xl uppercase"> Welcome to </h2>
            <h2 className="font-bold text-3xl text-green-400 uppercase">
              Hair Salon{" "}
            </h2>
            <p className="md:w-[300px] w-80 text-justify md:mx-0 mx-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              architecto ab hic rem placeat eius commodi eum eligendi recusandae
              sed qui cumque quibusdam.
            </p>
            <button className="italic font-bold text-2xl text-green-400">
              Read More
            </button>
          </div>
          <div>
            <img src={figure} alt="" />
          </div>
          <div className="md:w-[300px] w-80 border-2 md:h-[350px] flex flex-col justify-center items-center ml-7  gap-4 md:mx-0 mx-2">
            <h2 className="font-bold text-3xl text-green-400 uppercase">
              Opening Hours{" "}
            </h2>

            <h3 className=" font-bold ">Mon – Fri</h3>
            <p>10:00 AM – 8:30 PM</p>
            <h3 className=" font-bold ">Saturday</h3>
            <p>Closed</p>
            <h3 className=" font-bold ">Sunday</h3>
            <p>10:00 AM – 8:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
