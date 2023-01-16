import React from 'react'
import Logo from '../images/food_logo.png'
function Navbar() {
  return (
    <div>
        <div className='flex justify-evenly flex-wrap items-center md:my-4 my-4 '>
            <div className=' flex gap-5'>
                <div><img src={Logo} alt="" /> </div>
                <div className='text-lg font-bold uppercase'>Food - E</div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Navbar