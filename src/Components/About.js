import Footer from "./Footer"

const About = () =>{
    return(
        <>
        <div className="aboutCl">
            
        <h2>About Us</h2>

        <div className="row mx-5">
            <div className="col-md-4 my-4">
                <div className="card">
            <h3> <i class="fa fa-rocket"></i>   Mission</h3>
                <p className="px-4">
                At Softa, our vision is to pioneer a future where technology knows no bounds, and its potential is harnessed to drive human progress. We aspire to lead the IT software industry in shaping a world where innovation, connectivity, and efficiency converge seamlessly. Our vision is to create software solutions that empower businesses and individuals, simplifying complexities and enabling new possibilities. We're dedicated to forging a path toward a digital landscape where every challenge is met with a technological solution, making life smarter, more connected, and accessible.
                </p>
                </div>
                </div>
            <div className="col-md-4 my-4">
                <div className="card">
                <h3>  <i class="fa fa-flag"></i>   Vision</h3>
                <p className="px-4">
                Our mission at Softa is to be at the forefront of IT software innovation, dedicated to delivering transformative solutions that exceed expectations. We are committed to providing our clients with secure, scalable, and intuitive software products and services that elevate their potential. We achieve this through a relentless pursuit of excellence, continuous research, and development, and a commitment to being a responsive and adaptable partner. Our mission is also to cultivate a culture of collaboration, creativity, and integrity within our team, and contribute to the advancement of the IT.
                </p>
                </div>
                </div>
            <div className="col-md-4 my-4">
                <div className="card">
                <h3>
                <i class="fa fa-lightbulb-o"></i> 
                
                Values
                </h3>
                <p className="px-4">
                At Softa, our core values define who we are and guide our actions. We value innovation, seeing it as the driving force behind our success, and quality, ensuring that our software meets the highest standards of performance and security. We prioritize our clients and their success, conducting business with unwavering integrity and honesty. Collaboration is fundamental to our approach, both within our team and in our partnerships. We believe in continuous learning, recognizing that staying ahead requires a commitment to growth. Sustainability is a priority. 
                </p>
                </div>
                </div>

        </div>
        <div className="container">
        <div className="row my-5">
            <h3 className="text-center fs-1">What Drives us?</h3>
            <div className="col-md-6 my-3">
                <div className="card px-4">
                    <h3>Innovation</h3>
                    <p>
                    Innovation is the heartbeat of our company. We are constantly driven to push the boundaries of technology, to create solutions that redefine what's possible, and to stay at the forefront of industry trends.
                    </p>
                </div>
            </div>
            <div className="col-md-6 my-3">
                <div className="card px-4">
                    <h3>Collaboration</h3>
                    <p>
                    We know that the best results come from teamwork. Collaboration is at the core of what we do. Our diverse team works together to turn ideas into reality, bringing a variety of perspectives to the table.
                    </p>
                </div>
            </div>
             </div>
             <div className="row my-2">
            <div className="col-md-6 my-3">
                <div className="card px-4">
                    <h3>Community Engagement</h3>
                    <p>
                    We believe in giving back. Community engagement is an essential part of our identity. We actively support and contribute to the communities where we live and work.
                    </p>
                </div>
            </div>
            <div className="col-md-6 my-3">
                <div className="card px-4">
                    <h3>Positive Transformation</h3>
                    <p>
                    What drives us is the belief that we can be a catalyst for positive transformation. We're on a journey of innovation, collaboration, and making the world a better place. Join us in this mission.
                    </p>
                </div>
            </div>
             </div>
             </div>

             <div className="container">
                <h3 className='text-center my-5'>A Glimpse of our Activities</h3>
                <div className='row my-2' id='imgCol'>
                    <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
                        <div id='img8'></div>
                    </div> 
                    <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
                        <div id='img9'></div>
                    </div> 
                    <div className='col-lg-4 col-md-4 col-sm-12 my-3'>
                        <div id='img10'></div>
                    </div> 
                </div>
                <div className='row my-5' id='imgCol'>
                    <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
                        <div id='img11'></div>
                    </div> 
                    <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
                        <div id='img12'></div>
                    </div> 
                    <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
                        <div id='img13'></div>
                    </div> 
                </div>
             </div>
             <div className="aboutLast">
                <Footer />
             </div>
        </div>
        </>
    )
}
export default About