import React from 'react'
import img1 from '../images/div (1).png'
import img2 from '../images/div (2).png'
import img3 from '../images/div (3).png'
import img4 from '../images/div (4).png'
import img5 from '../images/div (5).png'
import img6 from '../images/div (6).png'
function Category() {
  return (
    <>
        <div className='md:mt-96 '>

        
        <div className=' md:mb-5 mb-3 md:mx-10 mx-10'>
            <div className='flex justify-evenly'>
                <div>Browse By <br /> <span className='text-pink-500 font-bold text-3xl'> Category </span> </div>
                <div> <button className='bg-pink-500 md:px-5 px-3 '> View All</button>  </div>
            </div>
        </div>
        <div className='flex  gap-10  '>
            <div> <img src={img1} alt=""  /> </div>
            <div> <img src={img2} alt="" /> </div>
            <div> <img src={img3} alt="" /> </div>
            <div> <img src={img4} alt="" /> </div>
            <div> <img src={img5} alt="" /> </div>
            <div> <img src={img6} alt="" /> </div>
        </div>
        
        </div>
    </>
  )
}

export default Category