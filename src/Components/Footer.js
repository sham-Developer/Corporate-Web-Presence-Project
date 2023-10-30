const Footer = () =>{
    return(
        <>
        <div className="myFooter1">
        <div className="container" id="footer">
            <div className="row">
                <div className="col-6">
                    <p>
                        <h4>Address</h4>
                    123 Main Street
                    <br></br>
                    Suite 456
                    <br></br>
                    Cityville, State
                    <br></br>
                    Zip Code: 12345
                    <br></br>
                    Country: United States
                    <br></br>
                    </p>

                    <p>
                        <h4>Contact</h4>
                        <i className="fa fa-phone"></i>  + 123 456 7890
                        <br></br>
                        <i className="fa fa-envelope"></i>  infoSolution@mail.com
                    </p>
                </div>
                <div className="col-6">
                    <p>
                        <h4>Quick Links</h4>
                        <br></br>
                        <a href="#"> Home </a>
                        <br></br>
                        <a href="#"> About </a>
                        <br></br>
                        <a href="#"> Services</a>
                        <br></br>
                        <a href="#"> FAQs</a>
                        <br></br>
                        <a href="#"> Contact </a>
                    </p>
                </div>
            </div>
        </div>
        <div className="container-fluid bg-dark text-center py-3">@Copyrights 2023. Softa Company Pvt Ltd</div>
        </div>
        </>
    )
}

export default Footer