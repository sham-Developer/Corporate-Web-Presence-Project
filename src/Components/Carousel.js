import React, {Component} from 'react';
import { ReactDOM } from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function Carousel_Func(){
    return(
        <Carousel className='carouselSec'>
            <div className='carInside' id='carInside1'>
                <h1>Car 1</h1>
                <button className='carButton'>Learn More</button>
            </div>
            <div className='carInside' id='carInside2'>
                <h1>Car 2</h1>
                <button className='carButton'>Learn More</button>
            </div>
            <div className='carInside' id='carInside3'>
                <h1>Car 3</h1>
                <button className='carButton'>Learn More</button>
            </div>
           
        </Carousel>
    )
}
export default Carousel_Func