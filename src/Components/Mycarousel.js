import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carouselOne from '../img/carousel_two.jpg'
import carouselTwo from '../img/carousel_three.jpg'
import '../CSS/Header.css'


function Mycarousel() {
  return (
    <div className='carousel'>
          <Carousel
              autoPlay={true}
              interval={5000}
              showStatus={false}
              infiniteLoop={true}
              showThumbs={false}
              showIndicators={false}
          >
               <div className='contain_img_car'>
                    <img style={{borderRadius: '10px' ,   width:'50%'}} src={carouselOne} />
                   
                </div> 
               
                <div className='contain_img_car'>
                    <img style={{borderRadius: '10px' ,   width:'70%'}} src={carouselTwo} />
                   
                </div>
              
            </Carousel>
    </div>
  )
}

export default Mycarousel