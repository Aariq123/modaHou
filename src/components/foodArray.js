import { Link } from "react-router-dom";
import { Context } from "../context/context";
import { useContext } from "react";

const FoodArray = ({displayArray}) => {

    const { addToFavourites } = useContext(Context)
    return ( 
        
        displayArray.map(food=>{
            const { id, image, title } = food
           
            return(
                    <div className="menu-div" key={id}>
                        <Link to='/recipe-info' state={{id:id, ligma:true}}>
                            <div className="img-div">
                                <img src={image} alt="" />
                            </div>
                        </Link>
                            <div className="menu-div-heading">
                            <Link to='/recipe-info' state={{id:id, ligma:true}}>
                                <span className="menu-div-title">{title}</span>
                            </Link>
                                <button onClick={()=> addToFavourites({id, image, title})} className="login-btn">Add to favourites</button>
                            </div>
                    </div>
            ) 
        }) 
        );
       
}
 
export default FoodArray;