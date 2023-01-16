import React from 'react'
import a from '../images/a.png'
import exp from '../images/div.png'
function Experience() {
  return (
    <>
        
        <div className="bg-slate-300 w-full">
        <div className=" mx-auto w-[350px] md:w-[800px] md:h-[30rem]  h-96 py-12 px-4 bg-EXP bg-cover md:bg-top bg-center flex justify-center items-center">
         <div className='flex flex-wrap flex-col justify-center items-center md:mt-20 mt-5 gap-10'>

         
         <div className='md:text-6xl text-3xl text-white'>
         Experience Our Outstanding Services
         </div>
         <div>
            <img src={a} alt="" />
         </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default Experience