import React from "react";
import image1 from '../images/FoodPro/Maze-Men.png'
import image2 from '../images/FoodPro/waffles-300x225.jpg.png'
import image3 from '../images/FoodPro/donuts-300x225.jpg.png'
import image4 from '../images/FoodPro/soup-hokkaido-300x225.jpg.png'
function HOTTEST() {
  return (
    <>
    <div className=" flex justify-center md:my-20 my-20 md:place-items-start items-center">
      <div className="md:w-[1280px] w-96   ">
        <h2 className=" md:my-10 my-5 font-bold text-4xl md:px-0 px-4">THE <span className="text-pink-500">HOTTEST FOOD </span>  RIGHT NOW</h2>
        <div className="flex flex-wrap gap-10 justify-center ">
          <div>
            <div>
              <img src={image1} alt="" />
            </div>
            <div>Maze-Men</div>
            <div>$13.50</div>
          </div>
          <div>
            <div>
              <img src={image2} alt="" />
            </div>
            <div>Belgian Waffles</div>
            <div>$12.00</div>
          </div>
          <div>
            <div>
              <img src={image3} alt="" />
            </div>
            <div>Doughnuts</div>
            <div>$3.50</div>
          </div>
          <div>
            <div>
              <img src={image4} alt="" />
            </div>
            <div>Hokkaido</div>
            <div>$10.00</div>
          </div>
        </div>
      </div> </div>
    </>
  );
}

export default HOTTEST;
