
import myimg1 from '../images/img1.avif'
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.png'
import img4 from '../images/img4.jpeg'
import Footer from "./Footer";
import Carousel2 from "./Carousel";
const Home = () =>{
  
    return(
        <>
        <section className="homePage">
        <br></br>
        <div className="HomeTop">
            <h2>Home page</h2>
        <p>
        We provide quality services that exceed our clients' expectations, consistently delivering results that drive success and satisfaction. Our commitment to excellence is at the heart of everything we do, ensuring that our clients receive the utmost value and reliability in every interaction with our team.
        </p>
        </div>
        <br></br>
        <Carousel2 />
        <section className="Home2 row" id="home2">
            <div className="col-md-6 col-sm-12 col-lg-6 px-5 my-3">
                <h2>
                    We create purpose driven apps and digital products
                </h2>
                <span>
                At the heart of our mission is the commitment to crafting purpose-driven apps and digital products. We believe that technology should serve a greater purpose, one that goes beyond mere functionality and aesthetics. Our team is dedicated to designing and developing solutions that not only meet the needs of our users but also positively impact their lives and the world around us. We understand the power of innovation and its potential to drive positive change, and we channel this understanding into every project we undertake. Whether it's empowering individuals, enhancing businesses, or contributing to a more sustainable and equitable future, our work is rooted in the belief that technology can be a force for good.
                </span>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 my-3">
                <img src={myimg1} alt=""></img>
            </div>
        </section>

        <section className="Home3">
        <h3>Best Features</h3>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col-md-4" >
                    <div className="card my-4" id='cardBox'>
      <div className="card-body">
        <h5 className="card-title">Web Development</h5>
        <p className="card-text">Our web application development services are the bridge between your vision and a powerful online solution. We specialize in creating custom web applications that empower your business, streamline processes, and enhance user experiences.</p>
      </div>
    </div>
                    </div>
                    <div className="col-md-4" >
                    <div className="card my-4" id='cardBox'>
      <div className="card-body">
        <h5 className="card-title">Mobile Application Development</h5>
        <p className="card-text">In today's fast-paced digital landscape, mobile applications have become the cornerstone of connecting with users on the go. Our mobile application development services bring your ideas to life, empowering your business with a direct and engaging channel to reach your audience. </p>
      </div>
    </div>
                    </div>
                    <div className="col-md-4" >
                    <div className="card my-4" id='cardBox'>
      <div className="card-body">
        <h5 className="card-title">Digital Marketing</h5>
        <p className="card-text">In the digital age, a strong online presence is crucial for business success. Our digital marketing services are designed to help you reach your target audience effectively, build brand awareness, and drive conversions.</p>
      </div>
    </div>
                    </div>
                </div>
                </div>
        </section>
        <br></br><br></br>
        <div className="my-5"></div>
        <section className="Home4" id="home4">
            <div className="container">
            <div className="row py-2 px-3 fs-5" id="numb">
                <span className="col-md-3 my-3">150+
                <br></br>Satisfied Clients</span>
                <span className="col-md-3 my-3">90+<br></br>Projects finished</span>
                <span className="col-md-3 my-3">5<br></br>Coutries Served</span>
                <span className="col-md-3 my-3">48<br></br>Developers</span>

            </div>
            </div>
        </section>
        <section className="Home5">
            <div className="container" id="ourWorks">
                <h2>Our works</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 my-5">
                       <div className="card">
                       <img src={img2} alt=""></img>
                       <h3>E-commerce</h3>
                       <p>
                       As a forward-thinking IT company, we understand that the world of e-commerce is constantly evolving, and we are here to empower 
                       businesses with cutting-edge solutions for their online product needs. Our commitment to the e-commerce sector goes beyond mere technology;
                       
                       </p>
                       </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 my-5">
                        <div className="card">
                        <img src={img3} alt=""></img>
                        <h3>Fintech Product</h3>
                        <p>
                        As a leading IT company at the intersection of technology and finance, we are dedicated to revolutionizing the fintech landscape.
                         Our mission is to empower businesses and individuals by delivering innovative fintech products that enhance financial accessibility, 
                         
                        </p>
                        </div>
                        
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 my-5">
                        <div className="card">
                        <img src={img4} alt=""></img>
                        <h3>Hiring Product</h3>
                        <p>
                        In the dynamic landscape of human resources, our IT company stands as a beacon of innovation, committed to delivering hiring products 
                        that streamline and elevate the recruitment process. We understand that acquiring the right talent is pivotal to a company's success,
                         
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="Home6">
            <Footer />
        </section>
        </section>
        </section>
        </>
    )
}

export default Home