import { Link } from "react-router-dom";

const FoodArray = ({displayArray}) => {

   
    return ( 
        
        displayArray.map(food=>{
            const { id, image, title } = food
           
            return(
                    <div className="menu-div" key={id}>
                        <Link to='/recipe-info/' state={{id:id}}>
                            <div className="img-div">
                                <img src={image} alt="" />
                            </div>
                            <div className="menu-div-heading">
                                <span className="menu-div-title">{title}</span>
                                <button className="login-btn">Add to cart</button>
                            </div>
                        </Link>
                    </div>
            ) 
        }) 
        );
       
}
 
export default FoodArray;