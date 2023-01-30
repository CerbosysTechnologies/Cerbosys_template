import React from 'react'
import Testimonial1 from "../img/testimonial-1.jpg"
import Testimonial2 from "../img/testimonial-2.jpg"
import Testimonial3 from "../img/testimonial-3.jpg"
import Testimonial4 from "../img/testimonial-4.jpg"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Testimonial() {

    var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
        
          {/* <!-- Testimonial Start --> */}
    <div class="container-fluid py-5">
        <div class="container">
            <div class="text-center pb-2">
                <h6 class="text-primary text-uppercase font-weight-bold">Testimonial</h6>
                <h1 class="mb-4">Our Clients Say</h1>
            </div>
         


             
            {/* <div class="owl-carousel testimonial-carousel  ">  */}
                 <Slider {...settings}>
                    <div className='gaping'>

                    
                <div class="position-relative bg-secondary p-4 m-3 ">
                    {/* style="top: -6px; right: 0;" */}
                    {/* <i class="fa fa-3x fa-quote-right text-primary position-absolute  " ></i> */}
                    <div class="d-flex align-items-center mb-3">
                        <img class="img-fluid rounded-circle w-[60px] h-[60px]" src={Testimonial1}  alt=""/>
                        <div class="ml-3">
                            <h6 class="font-weight-semi-bold m-0">Client Name</h6>
                            <small>- Profession</small>
                        </div>
                    </div>
                    <p class="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita</p>
                </div></div>
               <div className='gaping'>


         
                <div class="position-relative bg-secondary p-4 m-3 ">
                    {/* <i class="fa fa-3x fa-quote-right text-primary position-absolute" ></i> */}
                    <div class="d-flex align-items-center mb-3">
                        <img class="img-fluid rounded-circle w-[60px] h-[60px]" src={Testimonial2} alt=""/>
                        <div class="ml-3">
                            <h6 class="font-weight-semi-bold m-0">Client Name</h6>
                            <small>- Profession</small>
                        </div>
                    </div>
                    <p class="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita</p>
                </div>      </div>

                 <div className='gaping'>
                     
                 
                <div class="position-relative bg-secondary p-4 m-3">
                    {/* <i class="fa fa-3x fa-quote-right text-primary position-absolute" ></i> */}
                    <div class="d-flex align-items-center mb-3">
                        <img class="img-fluid rounded-circle w-[60px] h-[60px]" src={Testimonial3} alt=""/>
                        <div class="ml-3">
                            <h6 class="font-weight-semi-bold m-0">Client Name</h6>
                            <small>- Profession</small>
                        </div>
                    </div>
                    <p class="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita</p>
                </div></div>
                 <div className='gaping'>

                 
                <div class="position-relative bg-secondary p-4 m-3">
                    {/* <i class="fa fa-3x fa-quote-right text-primary position-absolute" ></i> */}
                    <div class="d-flex align-items-center mb-3">
                        <img class="img-fluid rounded-circle w-[60px] h-[60px]" src={Testimonial4} alt=""/>
                        <div class="ml-3">
                            <h6 class="font-weight-semi-bold m-0">Client Name</h6>
                            <small>- Profession</small>
                        </div>
                    </div>
                    <p class="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita</p>
                </div></div>
                </Slider>
            </div>  

     

        




        </div>
    {/* </div> */}

    {/* <!-- Testimonial End --> */}
    </div>
  )
}

export default Testimonial