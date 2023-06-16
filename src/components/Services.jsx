import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img1 from "../assets/3 (1).jpg"
import Img2 from "../assets/4 (1).jpg"

const Services = () => {
  return (
    <div className='services'>

      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>
        <div>

          <img src={Img1} alt='Item1'/>
          <p className='legend'>Full Stack</p>
        </div>
        <div>

          <img src={Img2} alt='Item2'/>
          <p className='legend'>peer to peer support</p>
        </div>
      </Carousel>
      
    </div>
  )
}

export default Services
