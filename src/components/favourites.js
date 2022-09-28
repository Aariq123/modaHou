import { useContext } from "react";
import { Context } from "../context/context";
import { Link } from "react-router-dom";

const Favourites = () => {
    const { favourites, deleteFavourites, clearFavourites } = useContext(Context);


    return ( 
        <div className="favourites">
        <div className="container">
            <div className="category-result">
            {favourites.length == 0 && <h1>You don't have any favourites</h1>}
            {favourites.length > 0 &&
                <div className="favourites">
                    <h1>Your Picks</h1>
                    {  favourites.map(food=>{
                        const { id, image, title } = food
           
            return(
                    <div className="menu-div" key={id}>
                        <Link to='/recipe-info' state={{id:id}}>
                            <div className="img-div">
                                <img src={image} alt="" />
                            </div>
                        </Link>
                            <div className="menu-div-heading">
                            <Link to='/recipe-info' state={{id:id, ligma:false}}>
                                <span className="menu-div-title">{title}</span>
                            </Link>
                                <button onClick={()=>deleteFavourites(id)} className="login-btn">Delete</button>
                            </div>
                       
                    </div>
            ) 
                 })} 
                </div> 
            }
            </div>  
            {favourites.length > 0 && <button onClick={clearFavourites} className="clear-favourites">CLEAR ALL</button> }
        </div>
        </div>
     );
     
}
 
export default Favourites;