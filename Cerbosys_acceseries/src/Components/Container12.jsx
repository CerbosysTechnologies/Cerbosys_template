import React from 'react'
import paypal from '../images/paypal.png.png'
import visa from '../images/visa.png.png'
import mastercard from '../images/mastercard.png.png'
import express from '../images/express.png.png'
import discover from '../images/discover.png.png'
function Container12() {
  return (
    <div class="cards">
        <div class="card1"><img src={paypal} alt=""/></div>
        <div class="card1"><img src={visa} alt=""/>
        </div>
        <div class="card1"><img src={mastercard} alt=""/></div>
        <div class="card1"><img src={express} alt=""/></div>
        <div class="card1"><img src={discover} alt=""/></div>
    </div>
  )
}

export default Container12