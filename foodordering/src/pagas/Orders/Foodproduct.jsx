import React from "react";
import Data from "../Orders/Food.json";
function Foodproduct() {
  return (
    <>
      {/* md:w-[1280px] w-96 */}
      <div className="flex justify-center  ">
        <div className=" md:w-[1280px] w-96  ">
          <div className=" flex justify-around flex-wrap md:my-10 my-5 md:flex-row flex-col">
            <div className="flex font-bold text-3xl ">Order your favorites</div>
            <div className="flex">
              <select name="" id="" className="font-bold text-lg">
                <option value="1">Latest</option>
                <option value="2">two day Befor</option>
                <option value="3">five day Befor</option>
                <option value="4"> 10 day Befor</option>
                <option value="5"> 10 day Befor</option>
              </select>
            </div>
          </div>
          {/* secon left  sart  */}

          <div className="flex md:flex-row flex-col justify-center items-center">
            <div className=" flex flex-col md:ml-52 ml-5 md:w-[800px] ">
              <div>
                <h2 className="font-bold text-2xl"> CATEGORIES</h2>
              </div>
              <div className="flex flex-wrap gap-2 md:my-4 my-2 ">
                <div className="bg-pink-500 md:px-2 px-1">Burgers</div>
                <div className="bg-pink-500 md:px-2 px-1">Fish</div>
                <div className="bg-pink-500 md:px-2 px-1">Meat</div>
                <div className="bg-pink-500 md:px-2 px-1">Noodles</div>
              </div>
              <div className="flex flex-wrap gap-2 md:my-4 my-2">
                <div className="bg-pink-500 md:px-2 px-1">Pastries</div>
                <div className="bg-pink-500 md:px-2 px-1">Salad</div>
                <div className="bg-pink-500 md:px-2 px-1">Soups</div>
              </div>

              <div>
                <h1 className="font-bold text-2xl md:my-5 my-2">DIET TYPE</h1>
                <div className="md:mx-5">
                  <span className="text-lg bg-slate-400 md:px-5 px-2">
                    <input type="checkbox" /> Gluten Free
                  </span>
                  <br />
                  <span className="text-lg bg-slate-400 md:px-5 px-2">
                    <input type="checkbox" />
                    Vegan{" "}
                  </span>{" "}
                  <br />
                  <span className="text-lg bg-slate-400 md:px-5 px-2">
                    <input type="checkbox" />
                    Vegetarian
                  </span>
                </div>
              </div>

              <div className="md:my-2 my-2">
                <h2 className="font-bold text-2xl ">PRICE</h2>

                <hr className="h-10  text-pink-500 w-20" />
              </div>

              <div className="flex justify-between ">
                <button className="bg-white md:px-5 px-5 md:my-5 py-5 ">
                  $0.00
                </button>
                <button className="bg-white md:px-5 px-5 md:my-5 py-5 ">
                  $89.00
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 items-center justify-center  ">
              {Data ? (
                Data.map((item, index) => (
                  <div className="bg-slate-200 flex flex-col gap-5 md:w-[200px] w-96 items-center justify-center md:py-5 py-2 ">
                    <div>
                      <img
                        src={item.Food_Image}
                        alt=""
                        className="md:w-full w-96"
                      />
                    </div>
                    <div>{item.Food_name}</div>
                    <div>{item.Food_price}</div>
                  </div>
                ))
              ) : (
                <h2 className="font-heading md:text-2xl text-lg">
                  No Product{" "}
                </h2>
              )}
            </div>
          </div>

          <div className=" flex gap-5 justify-center items-center md:my-5 my-2">
            <div className="bg-pink-500 md:px-2 px-2">1</div>
            <div className="bg-pink-500 md:px-2 px-2" >2</div>
            <div className="bg-pink-500 md:px-2 px-2" >3</div>
            <div className="bg-white md:px-2 px-2" >4</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Foodproduct;
