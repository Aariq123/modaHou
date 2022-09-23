const Footer = () => {
    return ( 
        <footer >
            <div className="container">
            <div className="footer1">
            <div className="flex">
                <div>
                    <span>OUR COMPANY</span>
                    <p>HELLOFRESH</p>
                    <p>CARRERS</p>
                    <p>PRESS</p>
                </div>
                <div>
                    <span>CONTACT US</span>
                    <p>HELP CENTER</p>
                    <p>INFORMATION</p>
                    <p>CORPORATE SALES</p>
                </div>
                <div>
                    <span>WORK WITH US</span>
                    <p>PARTNER</p>
                    <p>INFLUENCERS</p>
                    <p>AFFILIATES</p>
                </div>

            </div>


            <div className="flex-2">
                <span>Download our app</span>
                <p>Manage your deliveries from anywhere, anytime</p>
                <div className="store">
                    <img src={require('../images/hehe1.jpg')} alt="" />
                    <img src={require('../images/hehe2.jpg')} alt="" />
                </div>
            </div>
            </div>

        </div>
            <div className="footer2">
                <div>
                    <p></p>
                    <p>Terms and Conditions</p>
                    <p>Privacy</p>
                    <p>Accessibility</p>
                </div>
                <div className='social-links'>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-square-twitter"></i>
                    <i className="fa-brands fa-square-instagram"></i>
                </div>
            </div>

        </footer>
     );
}
 
export default Footer;