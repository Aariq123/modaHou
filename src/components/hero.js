import { Link } from 'react-router-dom'

const Hero = () => {
    return ( 
        <div>
        <div className="container">
            <div className="hero-text">
                <span>Khao Ar Moda Hou</span>
                <p>Freshly cooked meals at your doorstep</p>
                <Link to='/start'><button className='hero-btn'>START HERE</button></Link>
            </div>

            <div className="why-us">
                <h2>Why Us?</h2>
                <div className="why-us-flex">
                    <div>
                        <i className="fa-solid fa-truck-fast"></i><br />
                        <span>Fast Delivery</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, adipisci.</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-calendar-days"></i><br />
                        <span>No Long-Term Contract</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, doloribus.</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-bowl-rice"></i><br />
                        <span>Fresh And Affordable</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quis.</p>
                    </div>
                </div>
            </div>


            <div className="hero-menus">
                <h2>Our Top Rated Menus</h2>
                <div className="hero-menus-flex">
                    <div>
                        <span>MEAT & VEGGIES</span>
                        <img src={require('../images/plan2.jpg')} alt="" />
                    </div>
                    <div>
                        <span>VEGGIE</span>
                        <img src={require('../images/plan3.jpg')} alt="" />
                    </div>
                    <div>
                        <span>FAMILY FRIENDLY</span>
                        <img src={require('../images/plan4.jpg')} alt="" />
                    </div>
                    <div>
                        <span>QUICK AND EASY</span>
                        <img src={require('../images/plan1.jpg')} alt="" />
                    </div>
                </div>
            </div>


            <div className="hero-review">
                <h2>Still Not Convinced?</h2>
                <span>Hear from our top customers</span>
                <div>
                    <div className='review-text'>
                        <p>Pura Putki mara. Fast as fuck delivery. Freshly cooked. 10 outta 10.</p>
                        <p>- Tau Tau</p>
                        <div className='hero-stars'>
                            <i style={{color:'gold'}} className="fa-solid fa-star"></i>
                            <i style={{color:'gold'}} className="fa-solid fa-star"></i>
                            <i style={{color:'gold'}} className="fa-solid fa-star"></i>
                            <i style={{color:'gold'}} className="fa-solid fa-star"></i>
                            <i style={{color:'gold'}} className="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <img src={require('../images/ligma2.jpg')} alt="" />
                </div>
                <div>
                    <img src={require('../images/hehe.jpg')} alt="" />
                    <div className='review-text'>
                        <p>Khaia moira gesilam. Ar khamu na. 1 out of 10</p>
                        <p>- ????</p>
                        <div className='hero-stars'>
                            <i style={{color:'gold'}} className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                 </div>
            </div>

        </div>


            <div className="hero-plan">
                <img src={require("../images/hero2.jpg")} alt="" />
                <div>
                    <span>Customizable Plans</span>
                    <p>Meet your household needs</p>
                    <button className='hero-btn'>VIEW PLANS</button>
                </div>
            </div>


       </div>
     );
}
 
export default Hero;