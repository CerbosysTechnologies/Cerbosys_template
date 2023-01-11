import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// image import  
import Cactus from '../images/plantsSlider/Cactus.png'
import indoorPlants from '../images/plantsSlider/indoorPlants.png'
import OfficeEnergizers from '../images/plantsSlider/OfficeEnergizers.png'
import Orchids from '../images/plantsSlider/Orchids.png'
import OutdoorPlants from '../images/plantsSlider/OutdoorPlants.png'

function PlantsSlider() {
  return (
    <div>
         {/* Slider Div */}
          <div className="flex flex-wrap md:flex-1 items-center justify-center z-[-15]">
            <Swiper
              className=" md:my-10 my-5 md:h-52 h-52 "
              modules={[Autoplay, Pagination]}

               // Responsive breakpoints
  breakpoints={ {
    // when window width is >= 320px
    320: {
      slidesPerView:1,
      spaceBetween:20
    },
    // when window width is >= 480px
    480: {
      slidesPerView:2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }}
                    
              pagination={{
                clickable: true,
              }}
              loop={true}
              slidesPerView={4}
       
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
                
              }}
            >
              {/* {featuredicons.map((slideContent, index) => ( */}
              <SwiperSlide className='flex items-center'>
                <img
                  src={indoorPlants}
                  alt=""
                  className="md:w-40 md:h-40 mt-10 md:mx-4 px-2 w-40 h-40 md:mt-0 scale-100 hover:scale-125 ease-out duration-500"
                />
                <div>
                    indoor Plants 
                    <div> 5 items </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='flex items-center'>
                <img
                  src={Cactus}
                  alt=""
                  className="mmd:w-40 md:h-40 mt-10 md:mx-4 px-2 w-40 h-40 md:mt-0 scale-100 hover:scale-125 ease-out duration-500"
                />
                <div>
                    Cactus 
                    <div> 5 items </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='flex items-center'>
               
                  <img
                    src={OfficeEnergizers}
                    alt=""
                    className="mmd:w-40 md:h-40 mt-10 md:mx-4 px-2 w-40 h-40 md:mt-0 scale-100 hover:scale-125 ease-out duration-500"
                  />
                   <div>
                         OfficeEnergizers 
                    <div> 5 items </div>
                </div>
             
               
              </SwiperSlide>
              <SwiperSlide className='flex items-center'>
              
                  <img
                    src={Orchids}
                    alt=""
                    className="mmd:w-40 md:h-40 mt-10 md:mx-4 px-2 w-40 h-40 md:mt-0 scale-100 hover:scale-125 ease-out duration-500"
                  />
                   <div>
                         Orchids 
                    <div> 5 items </div>
                </div>
               
              </SwiperSlide>
              <SwiperSlide className='flex items-center'>
               
                  <img
                    src={OutdoorPlants}
                    alt=""
                    className="mmd:w-40 md:h-40 mt-10 md:mx-4 px-2 w-40 h-40 md:mt-0 scale-100 hover:scale-125 ease-out duration-500"
                  />
                   <div>
                    OutdoorPlants 
                    <div> 5 items </div>
                </div>
                
               
              </SwiperSlide>
              {/* ))} */}
            </Swiper>
          </div>
          {/* Slider Div Ends*/}
    </div>
  )
}

export default PlantsSlider