import React from 'react'
import Map from '../images/map-img.png.png'
import Book from '../images/book.png'
function Map_section() {
  return (
    <div class="map_section">
    <div class="book_image"><img src={Book} width="100%" alt=""/></div>
    <div class="map_image"><img src={Map}  width="100%" alt=""/></div>
  </div>
  )
}

export default Map_section