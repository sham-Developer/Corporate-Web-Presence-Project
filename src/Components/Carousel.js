import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function Carousel2(){
    return(
        <Carousel className='carouselSec'>
            <div className='carInside' id='carInside1'>
                <h1>Web Application Development Experts</h1>
                <br></br><br></br><br></br>
                <h2> <i class="fa fa-arrow-right" aria-hidden="true"></i> Crafting Digital Solutions</h2>
                <br></br>
                <h4>We design and develop custom web applications tailored to your business needs.</h4>
                <button className='carButton'>Learn More</button>
            </div>
            <div className='carInside' id='carInside2'>
                <h1>Tailored Solutions</h1>
                <br></br><br></br><br></br>
                <h2> <i class="fa fa-arrow-right" aria-hidden="true"></i> Bespoke Web Apps</h2>
                <br></br>
                <h4>We create unique web solutions to solve your specific challenges.</h4>
                <button className='carButton'>Learn More</button>
            </div>
            <div className='carInside' id='carInside3'>
                <h1>Our Expertise</h1>
                <br></br><br></br><br></br>
                <h2> <i class="fa fa-arrow-right" aria-hidden="true"></i> Cutting-Edge Technologies</h2>
                <br></br>
                <h4>Leverage the latest web technologies for robust, high-performing applications.</h4>
                <button className='carButton'>Learn More</button>
            </div>
           
        </Carousel>
    )
}
export default Carousel2;