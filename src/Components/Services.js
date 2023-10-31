import img15 from '../images/img15.jpg';
import img16 from '../images/img16.jpg';
import img17 from '../images/img17.jpg';
import Footer from './Footer';

const Services = () =>{
    return(
        <>
        <section className="servicesPagee">
            <h2 className="my-5 text-center fs-2">The Services we provide</h2>
            <h2 className="fs-1 text-center my-3">Ideation and Assessment Services</h2>
            <div className="container" id='fCard'>
                <div className="row my-2">
                    <div className="col-md-4 my-4">
                        <div className="card px-4 py-2">
                        <h3 className="my-3">Custom Software Development </h3>
We specialize in creating bespoke software solutions tailored to your business requirements. Whether you need a web application, mobile app, or desktop software, our team will design, develop, and deliver a solution that empowers your business
                        </div>
                    </div>

                    <div className="col-md-4 my-4">
                        <div className="card px-4 py-4">
                        <h3 className="my-3">UI/UX Design</h3>
Good design is at the heart of any successful digital product. Our UI/UX designers create intuitive and visually appealing user interfaces that enhance user experiences.
                        </div>
                    </div>

                    <div className="col-md-4 my-4">
                        <div className="card px-4 py-4">
                        <h3 className="my-3">Quality Assurance and Testing</h3>
                        Our rigorous testing and quality assurance processes ensure that your software is bug-free and performs flawlessly, providing a seamless user experience.
                        </div>
                    </div>

                </div>
                <div className="row my-2">
                    <div className="col-md-4 my-4">
                        <div className="card px-4 py-4">
                        <h3 className="my-3">Maintenance and Support </h3>
                        We provide post-launch support, updates, and maintenance to keep your software running smoothly and up-to-date with evolving technologies.                        </div>
                    </div>

                    <div className="col-md-4 my-4">
                        <div className="card px-4 py-4">
                        <h3 className="my-3">Agile Development
</h3>
We follow Agile methodologies, fostering collaboration and iterative development to deliver high-quality software that meets your evolving needs.                        </div>
                    </div>

                    <div className="col-md-4 my-4">
                        <div className="card px-4 py-4">
                        <h3 className="my-3">Scalability</h3>
                        Our solutions are designed to grow with your business. We build scalable software that can adapt to your changing requirements.

</div>
                    </div>

                </div>
            </div>
            <div className="container my-5" id='bFeature'>
                <h2 className="fs-1 text-center">Best Feature Services</h2>
                <div className="row my-5 py-5">
                    <div className="col-lg-6 col-md-12 col-sm-12" >
                        <h3 className='py-4'>Web Development</h3>
                        <h5>Front End</h5>
                        <p>Our front end development team is dedicated to creating a stunning, user-centric interface. With a focus on the visual and interactive components of your web application, we ensure that your users are engaged, delighted, and empowered.</p>
                        <h5>Back End</h5>
                        <p>Our back end development team is the driving force behind your web application's functionality. Behind the scenes, they ensure that data is processed, stored securely, and delivered efficiently.</p>
                        <h5>Design</h5>
                        <p>Design is not just about aesthetics; it's about creating a memorable user experience. Our design team ensures that your product is visually appealing, user-friendly, and leaves a lasting impression. </p>  
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src={img15} data-mdb-toggle="animation" data-mdb-animation="slide-in-left" data-mdb-animation-start="onScroll" alt=""></img>
                    </div>
                </div>
                <div className="row my-5 py-5">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src={img16} alt=""></img>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 px-5">
                        <h3 className='py-4'>Mobile Application Development</h3>
                        <h5 className='px-5'>Cross-Platform Expertise</h5>
                        <p className='px-5'> We specialize in cross-platform development, ensuring that your app can be deployed on both iOS and Android devices, reducing development costs and time to market.</p>
                        <h5 className='px-5'>User-Centric Design</h5>
                        <p className='px-5'> Our UI/UX designers craft user-friendly, intuitive interfaces that keep users engaged and satisfied. We prioritize seamless navigation, attractive visuals, and easy interactions.</p>
                        <h5 className='px-5'>Maintenance and Support</h5>
                        <p className='px-5'>Our commitment to your success doesn't end at launch. We provide ongoing maintenance and support to address any issues, updates, or enhancements your app may require.</p>
                    </div>
                    
                </div>
                <div className="row my-5 py-5">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h3 className='py-4'>Digital Marketing</h3>
                        <h5>Search Engine Optimization (SEO)</h5>
                        <p>Our SEO experts optimize your website to rank higher on search engine results pages. This increased visibility drives organic traffic and improves your site's overall performance.</p>
                        <h5>Social Media Marketing</h5>
                        <p>Our social media specialists develop and execute comprehensive social media strategies. We create engaging content, manage social media accounts, and utilize advertising to increase brand awareness and engagement.</p>
                        <h5>Online Reputation Management</h5>
                        <p>Protect and enhance your brand's online reputation. Our reputation management strategies monitor online mentions and reviews, ensuring your brand maintains a positive image.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src={img17} alt=""></img>
                    </div>
                </div>
            </div>
            <div className='servicesLast'>
                <Footer />
            </div>
        </section>
        </>
    )
}
export default Services