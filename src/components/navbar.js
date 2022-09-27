import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../context/context';




const Navbar = () => {

    const { openNav, navOpen, favourites } = useContext(Context)


    return ( 
        <nav>
            
                <i onClick={openNav} className="fa-solid fa-bars"></i>
         
            <ul className={navOpen ? 'nav-ul open' : 'nav-ul'}>
                <div className="links">
                    <li><Link to='/modaHou'>Home</Link></li>
                    <li><Link to='/modaHou/plans'>Our Plans</Link></li>
                    <li><Link to='/menu'>Menus</Link></li>
                </div>
                <div>
                   <Link to='/favourites'><button className="login-btn"><i className="fa-solid fa-crown"></i> <div>{favourites.length}</div> </button></Link>
                </div>
            </ul>
        </nav>
     );
}
 
export default Navbar;