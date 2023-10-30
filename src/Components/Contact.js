import img14 from '../images/img14.jpg'
import Footer from './Footer'

const Contact = () =>{
    return(
        <>
       <section className="contactPage">
       <h2 className="text-center my-5 fs-1">Get in touch with us</h2>
       <div className="row my-5 mx-5" id='contactDesc'>
        <div className="col-md-6 my-4">
        <h2>Introducing Softa - <br></br>Your Reliable Designers.</h2><br></br>
        <p className='fs-4'>Softa is a one-stop shop that may boost <br></br>consumer satisfaction with your goods and services <br></br> while revolutionizing the way your organization operates.<br></br> Software solutions that are immersive and adaptable<br></br> to a variety of sectors are expertly designed <br></br>by our team of development professionals.</p>
        </div>
        <div className="col-md-6 my-4">
            <img src={img14} alt='myimage' id='cImg'></img>
        </div>
       </div>
       <div className='container row px-5' id='contact2'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
            <form>
                <label>Name *</label>
                <br></br>
                <input type='text' className='form-control my-2'></input>
                <br></br>
                <label>Email *</label>
                <br></br>
                <input type='email' className='form-control my-2'></input>
                <br></br>
                <label>Phone Number *</label>
                <br></br>
                <input type='email' className='form-control my-2'></input>
                <br></br>
                <label>What your looking for *</label>
                <br></br>
                <select className='form-control my-2'>
                    <option>Web Development</option>
                    <option>Mobile Development</option>
                    <option>Commerce Development</option>
                    <option>Internet of Things</option>
                    <option>Digital Marketing</option>
                </select>
                <br></br>
                <label>Your message *</label>
                <br></br>
                <textarea rows={4} cols={20} className='form-control my-2'></textarea>
                <button type='submit' className='btn bordered my-3 btn-secondary'>Send Message</button>
            </form>
        </div>
       <div className='col-lg-6 col-md-6 col-sm-12 px-5' id='gmap'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29603624.236896414!2d61.02291715666863!3d19.732445881430763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e1!3m2!1sen!2sin!4v1698312411220!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" id='map' referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
       </div>
       <div className='servicesLast'>
              <Footer />
            </div>
       </section>
        </>
    )
}
export default Contact