import React from 'react'

function Footer() {
  return (
    <div className=' md:my-10 my-5 bg-slate-700 md:py-5 py-5 text-white'>
       <div className='flex flex-wrap justify-evenly items-center gap-10 '> 
        <div className=' text-justify md:w-[200px] w-80 md:mx-0 mx-5'>
          <h2 className=' font-bold text-3xl md:my-5 my-5'>About Hairsal</h2>
          <p className=''> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis, minima minus odio!</p>
        </div>
        <div>
          <h2 className='md:my-5 my-5 font-bold text-3xl'>
          Quick Menu 1
          </h2> 
          <ul className='flex flex-wrap flex-col gap-5'>
            <li>
            Home
            </li>
            <li>
            Barbers
            </li>
            <li>
            News
            </li>
            <li>
            Team          
              </li>
              <br /><br />
          </ul>
        </div>
        <div  >
          <h2 className='md:my-5 my-5 font-bold text-3xl'>
          Quick Menu 2
          </h2> 
          <ul className='flex flex-wrap flex-col gap-5'>
            <li>
            About Us
            </li>
            <li>
            Privacy Policy
            </li>
            <li>
            Contact Us
            </li>
            <li>
            Membership          
              </li>
              <br /><br />
          </ul>
        </div>
        <div className='md:w-[200px] w-80 md:mx-0 mx-5 text-justify flex  flex-col gap-10'>
          <h2 className='font-bold text-3xl'>Subscribe Newsletter</h2>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit minima minus odio.</p>
          <div className='flex gap-5  flex-wrap '>
          
           <div>   <input type="text" placeholder='please send you Email' className=' md:w-[200px] w-80 md:px-2 px-2 md:py-2 py-2' />
         </div>  
          <div>
              <button className='bg-green-400 md:px-2 px-2 md:py-2 py-2'> Send</button>
          </div>
          </div>
          
        </div>
</div>
      <p>Cerbosys 2023 - All right reserved </p> 
    </div>
    
  ) 
}

export default Footer