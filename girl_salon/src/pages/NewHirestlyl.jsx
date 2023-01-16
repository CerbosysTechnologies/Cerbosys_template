import React from "react";
import person from "../images/person.png";
function NewHirestlyl() {
  return (
    <>
      
      <div className="bg-slate-50 w-full">
        <div className=" flex justify-center items-center flex-wrap gap-10">
          <div className=" ">
            <img src={person} alt="" />
          </div>
          <div className="md:w-[400px] w-96 md:h-[400px] bg-white md:-ml-28 flex flex-col justify-center items-center gap-10">
            <h2> New hairstyle! </h2>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique dolorem quisquam laudantium, incidunt id laborum,
              tempora aliquid labore minus. Nemo maxime, veniam! Fugiat odio nam
              eveniet ipsam atque, corrupti porro”
            </p>
            <p>— Stellla Martin</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewHirestlyl;
