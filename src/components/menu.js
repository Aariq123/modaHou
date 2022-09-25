import { useContext } from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/context";
import { cuisines } from "../data";
import FoodArray from "./foodArray";
import Pagination from "./pagination";



const Menu = () => {

    const { key1 } = useContext(Context)


    const [ foodArray, setFoodArray ] = useState([])
    const [ displayArray, setDisplayArray ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ postsPerPage, setPostPerPage ] = useState(8);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ fetched, setFetched ] = useState(false)
    const [ search, setSearch ] = useState('');
    const [ width, setWidth ] = useState()
    const [ cuisine, setCuisine ] = useState("");
    const [ searchArray, setSearchArray ] = useState([])
    const [ displaySearchArray, setDisplaySearchArray ] = useState()
    const [ searchDivShow, setSearchDivShow ] = useState(false)

    let count = 0
    const widthRef = useRef(null)
    let divWidth = 2100;
    let click;
 



  useEffect(()=>{
    if(widthRef){
        setWidth(widthRef.current.getBoundingClientRect().width)
        click = Math.ceil(divWidth/width)
    }
    },[widthRef.current])
   

    
    const move = (direction) => {
        widthRef.current.style.transition = 'all 0.6s ease'
        if(direction === 'right'){
            count++
            if(count === click){
                count = 0
            }
            widthRef.current.style.left = `-${width * count}px`
        }else{
           count--
            if(count < 0){
               count = click - 1
            }
            widthRef.current.style.left = `-${width * count}px`
        }

    }
  

    const closeSearchDiv = (e) =>{
        if(searchDivShow){
            if(!e.target.classList.contains('ligma')){
                setSearchDivShow(false)
            }
        }
    }
           
    const openSearchDiv = () =>{
        if(search !== ''){
            if(!searchDivShow){
                setSearchDivShow(true)
            }
        }
    }

        const getRecipes = async (item) => {
            if(item !== ''){
                setLoading(true)
                const ligma = await fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${item}&number=100&apiKey=${key1}`)
                const data = await ligma.json()
                console.log(data.results)
                setFoodArray(data.results)
                setLoading(false)
                setFetched(true)
            }
                
        }
      
        useEffect(()=>{
            const searching = async () => {
                if(search.split('').length > 0){
                    const ligma = await fetch(`https://api.spoonacular.com/recipes/autocomplete?number=50&query=${search}&apiKey=${key1}`)
                    const data = await ligma.json()
                    setSearchArray(data)
                    console.log(searchArray)
                    setDisplaySearchArray(searchArray.slice(0,5))
                    setSearchDivShow(true)
                } else{
                    setSearchDivShow(false)
                }
            }
       
         searching()
        },[search])
                
        


    
        useEffect(()=>{
            if(foodArray){
                const lastItem = currentPage * postsPerPage;
                const firstItem = lastItem - postsPerPage;
    
                setDisplayArray(foodArray.slice(firstItem, lastItem))
            }
        },[foodArray, currentPage])
        

      

  const pagination = (num) => {
            setCurrentPage(num)
        }

   
      
      
    return (  
       
        <div className="menu" onClick={closeSearchDiv}>
            <div className="container">
                <h1>Take a look at our menus</h1>

                <h1>What are you looking for?</h1>

                <form>
                    <input type="text" className="search ligma" placeholder="Search" 
                    value={search} onChange={(e)=>setSearch(e.target.value)} onClick={openSearchDiv}/>
                </form>

                <div className={searchDivShow ? 'search-result show ligma' : 'search-result'}>
                        <div className="5-result">
                        {displaySearchArray &&  displaySearchArray.map(food=>{
                            return(
                                <div className="result" key={food.id}>
                                    <Link to='/recipe-info/' state={{id:food.id}}>
                                        <img src={`https://spoonacular.com/recipeImages/${food.id}-90x90.${food.imageType}`} alt="" />
                                        <p className="bold">{food.title}</p>
                                    </Link>
                                </div>
                                )
                        })}
                        </div>
                         {searchArray && <p className="all-results"><Link to='/all-results/' state={{searchArray:searchArray, search:search}}>See all results for '{search}'</Link></p>}
                </div>


                <div className="cuisine-select">
                    <h2>Select a cuisine</h2>
                    <div className="cuisine-select-wrapper">
                        <i onClick={()=> move('left')} className="fa-solid fa-chevron-left"></i>
                        <div>
                            <div ref={widthRef}>
                            {
                                cuisines.map((item,i)=>{
                                    return(
                                            <div onClick={()=> {
                                                setCuisine(item)
                                                getRecipes(item)}} className="cuisine-select-div" key={i}>
                                                  {item} 
                                            </div>
                                      )
                                })
                            }
                            </div>
                        </div>
                        <i onClick={()=> move('right')} className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>


                {fetched && 
                <h2>
                    All {cuisine} recipes
                </h2>}
            <div className="category-result">
                {loading && <h1>Loading...</h1> }
                {displayArray && <FoodArray displayArray={displayArray}></FoodArray>}
            </div>
                {foodArray && <Pagination currentPage={currentPage} array={foodArray} pagination={pagination}></Pagination>}
            </div>
        </div>
    );
}
 
export default Menu;