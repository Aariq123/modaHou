import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Pagination from "./pagination";
import { useEffect, useState } from "react";
import { Context } from "../context/context";
import { useContext } from "react";


const AllResults = () => {
    const location = useLocation()
    const { searchArray, search } = location.state
    const [ postsPerPage, setPostPerPage ] = useState(8);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ displayArray, setDisplayArray ] = useState([])
    const { addToFavourites } = useContext(Context)

    useEffect(()=>{
        if(searchArray){
            const lastItem = currentPage * postsPerPage;
            const firstItem = lastItem - postsPerPage;

            setDisplayArray(searchArray.slice(firstItem, lastItem))
        }
    },[searchArray, currentPage])
    


    
  const pagination = (num) => {
    setCurrentPage(num)
}


    if(displayArray){
        return ( 
            <div className="all-results">
                <h1>All results from '{search}'</h1>
            <div className="category-result">{
             
                
            displayArray.map(food=>{
               const {title, id, imageType } = food
               let image =  `https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`
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
               
               )}) 
               }
               </div>

            {searchArray && <Pagination currentPage={currentPage} array={searchArray} pagination={pagination}></Pagination>}
            </div>
           );
    }
   
}
 
export default AllResults;