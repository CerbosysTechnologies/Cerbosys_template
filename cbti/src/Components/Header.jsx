import React from 'react'
import headerImg1 from '../image/Group 8344.png'
import headerImg2 from '../image/Group 8346.png'

function Header() {
  return (
    <div> <div className="topbar">
    erfetgdetygr
   </div>
   <nav className="main-menu">
       <div className="container-fluid">
           <div className="main-menu__logo">

               <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-1" viewBox="0 0 317 120">
                   <path d="M259.856,120H0V0H274l43,37.481Z"></path>
               </svg>
               <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-2" viewBox="0 0 317 120">
                   <path d="M259.856,120H0V0H274l43,37.481Z"></path>
               </svg>


               <a href="index.html">
                   <img src={headerImg1} width="100" height="60" alt="Finlon"/>
               </a>
           </div>
           <div className="main-menu__nav">
               <ul className="main-menu__list">
                   <li className="dropdown current">
                       <a href="#">Home</a>
                      
                   </li>
                   <li>
                       <a href="#">About</a>
                   </li>

                   <li className="dropdown"><a href="#">Services</a>
                      
                   </li>
                   <li className="dropdown"><a href="#">Pages</a>
                      
                   </li>
                   <li className="dropdown"><a href="#">Features</a>
                      
                   </li>
                   <li className="dropdown"><a href="#">News</a>
                      
                   </li>
                   <li><a href="#">Contact</a></li>
               </ul>
           </div>
           <div className="main-menu__right">
               <a href="#" className="main-menu__toggler mobile-nav__toggler">
                   <i className="fa fa-bars"></i>
               </a>
             
               <a href="#" className="thm-btn main-menu__btn">Request Loan</a>
              
           </div>
       </div>
   </nav>
  

   <div className="stricky-header stricked-menu main-menu">
       <div className="sticky-header__content">
       <div className="container-fluid">
           <div className="main-menu__logo"> 

               <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-1" viewBox="0 0 317 120">
                   <path d="M259.856,120H0V0H274l43,37.481Z"></path>
               </svg>
               <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-2" viewBox="0 0 317 120">
                   <path d="M259.856,120H0V0H274l43,37.481Z"></path>
               </svg>


               <a href="#">
                   <img src={headerImg2}width="140" height="51" alt="Finlon"/>
               </a>
           </div> 
          
        <div className="main-menu__nav">
               <ul className="main-menu__list">
                   <li className="dropdown current">
                       <a href="#">Home</a>
                       
                   </li>
                   <li>
                       <a href="#">About</a>
                   </li>

                   <li className="dropdown"><a href="#">Services</a>
                      
                   </li>
                   <li className="dropdown"><a href="#">Pages</a>
                       
                        
                  
                   </li>
                   <li className="dropdown"><a href="#">Features</a>
                       
                   </li>
                   <li className="dropdown"><a href="#">News</a>
                   </li>
                   <li><a href="#">Contact</a></li>
               </ul>
           </div> 
           
           <div className="main-menu__right">
               <a href="#" className="main-menu__toggler mobile-nav__toggler">
                   <i className="fa-solid fa-bars"></i>
               </a>
              
               <a href="#" className="thm-btn main-menu__btn">Request Loan</a>
            
           </div>
       </div>
   </div>
   </div>
   </div>
  )
}
;
export default Header