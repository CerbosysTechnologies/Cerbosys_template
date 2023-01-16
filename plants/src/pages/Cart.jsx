import React from "react";
// import  {Link}  from 'react-router-dom';
import indore from "../images/plantsSlider/indoorPlants.png";
import data from "../componets/Product.json";
const Cart = () => {
//   console.log(data);
//  data.map((item, index) => (console.log(item.Product_Image.substring(10))
  
//  ))
  return (
    <div>
      {/* grid xl:grid-cols-4 lg:grid-col-3 lg:py-5 gap-10 lg:px-5  py-10 px-10 my-10 gap-x-16 */}
      <section class=" justify-center   items-center flex  flex-wrap  gap-10 gap-y-10 md:my-5 my-3 text-white">
        {/* card start */}
        {data ? (
          data.map((item, index) => (
          // data.slice(0, 10).map((item, index) => (
            <div class="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective  ">
              <div class="relative preserve-3d hover:my-rotate-y-180 w-full h-full duration-1000 justify-center   items-center flex  flex-wrap">
                <div class="absolute backface-hidden border-2 bg-white rounded-lg">
                  <img
                    src={item.Product_Image}
                    alt="/"
                    className="flex justify-center mx-auto object-fill cursor-pointer md:w-80 md:h-60 w-52 h-44 "
                  ></img>
                  <label
                    htmlFor=""
                    className="flex justify-center md:mt-5  font-bold text-lg "
                  >
                    {item.Product_Name}
                  </label>
                  <div className="flex justify-around py-3 gap-5  px-5">
                    <div>
                      <div className="md:text-md   text-black font-bold text-md shadow-2xl">
                        {item.Product_Price}
                      </div>
                    </div>
                    <div>
                      <div className=" md:text-md   text-slate-400 font-bold text-md">
                        {item.Product_dis}
                      </div>
                    </div>
                  </div>
                  <div className="py-5 flex justify-center">
                    <button
                      className="md:text-md text-xs  bg-blue-500 hover:bg-blue-700  text-white font-bold py-3 px-20 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      <p>Add to cart</p>
                    </button>
                  </div>
                </div>
                <div class="absolute my-rotate-y-180 backface-hidden w-full py-5 bg-slate-300  overflow-hidden rounded-lg">
                  <div class="text-center flex flex-col items-center justify-center py-5 text-gray-800 px-2">
                    <h1 class="text-2xl font-semibold">  {item.Product_Name}</h1>

                    <p className="justify-start text-left text-xs md:py-3">
                      {item.discription}
                    </p>
                    {/* <p class="text-xs justify-start text-left -ml-56 md:py-2">
                      Highlights
                    </p>
                    <ul className="text-xs justify-start text-left list-disc -ml-28">
                      <li>Windows 10 Home</li>
                      <li>WIntel Core i5</li>
                      <li>HDD Capacity 500 GB</li>
                      <li>WiRAM 8 GB DDR3</li>
                      <li>WDisplay</li>
                    </ul>
                    <div className="text-white bg-blue-700  my-2 p-1 text-right text-xs justify-right flex -mr-32 ">
                      Read more
                    </div> */}

                    <div className="flex justify-around  gap-5 md:  px-5 ">
                      <div>
                        <button
                          className="md:text-md text-xs  hover:bg-blue-700  text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          {item.Product_Price}
                        </button>
                      </div>
                      <div>
                        <button
                          className=" md:text-md text-xs text-slate-400 hover:bg-pink-700  font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          {item.Product_dis}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          ))
        ) : (
          <h2 className="font-heading md:text-2xl text-lg">No Product </h2>
        )}

        {/* card end */} 
                     
      </section>
      <div className=" flex justify-center items-center">

      
       <div className=" bg-black w-fill text-white md:px-5 px-5 md:py-3 py-3">
                        Load More
       </div></div>
    </div>
  );
};

export default Cart;
