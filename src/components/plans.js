import { useState } from "react";
import { diets, intolerances } from "../data";
import { Context } from "../context/context";
import { useContext, useEffect } from "react";
import FoodArray from "./foodArray";
import Pagination from "./pagination";


const Plans = () => { 
    const { key1 } = useContext(Context)

    const [ dietName, setDietName ] = useState('ketogenic')
    const [ intoleranceName, setIntoleranceName ] = useState('dairy')
    const [ maxCal, setMaxCal ] = useState(5000)
    const [ maxSugar, setMaxSugar ] = useState(100)
    const [ dietDropDown, setDietDropDown ] = useState(false)
    const [ intoleranceDropDown, setIntoleranceDropDown ] = useState(false)
    const [ loading, setLoading ] = useState(false);
    const [ foodArray, setFoodArray ] = useState([])
    const [ displayArray, setDisplayArray ] = useState([]);
    const [ postsPerPage, setPostPerPage ] = useState(8);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ searchArray, setSearchArray ] = useState([])

   
    const closeDropDown = (e) => {
        if(dietDropDown){
            if(e.target.className !== 'diet-container'){
                setDietDropDown(false)
            }
        }

        if(intoleranceDropDown){
            if(e.target.className !== 'diet-container'){
                setIntoleranceDropDown(false)
            }
        }
    }

    const getRecipes = async () => {
            setLoading(true)
            const ligma = await fetch(`https://api.spoonacular.com/recipes/complexSearch?diet=${dietName}&maxCalories=${maxCal}&maxSugar=${maxSugar}&intolerances=${intoleranceName}&number=100&apiKey=${key1}`)
            const data = await ligma.json()
            console.log(data)
          
            setFoodArray(data.results)
            setLoading(false)
           
    }


    const submit = (e) => {
        e.preventDefault();

        getRecipes()
    }

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
        <div className="container" onClick={closeDropDown}>
        <div className="plans">
                <h2>Customize However You want</h2>
                <p>Whether you have a specific diet or intolerance we've got you covered. You can also set the maximum amount of calories or sugar. Click  <button className="hero-btn">APPLY FILTER</button>. And we will filter through our recipes.</p>
        <form>
        <div className="customize">
                <div>
                <div className="diets">
                    <h3>Diets:</h3>
                    <div className="select-div" onClick={()=> setDietDropDown(!dietDropDown)}>
                        {dietName}
                        <i className={!dietDropDown ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-down none"}></i>
                        <i className={dietDropDown ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-up none"}></i>
                    </div>
                    <div className={dietDropDown ? "diet-container" : "diet-container none"}>
                        {diets.map((item,i)=>{
                                return (
                                    <div className='diet' key={i} onClick={()=>{
                                        setDietName(item.diet)
                                        }}>
                                      {item.diet}
                                    </div>
                                )
                        })}
                    </div>
                </div>

                <div className="intolerances">
                    <h3>Intolerances:</h3>
                <div className="select-div" onClick={()=> setIntoleranceDropDown(!intoleranceDropDown)}>
                    {intoleranceName}
                    <i className={!intoleranceDropDown ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-down none"}></i>
                    <i className={intoleranceDropDown ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-up none"}></i>
                </div>
                    <div className={intoleranceDropDown ? "diet-container" : "diet-container none"}>
                        {intolerances.map((item,i)=>{
                            return (
                                <div className="intolerance" key={i} onClick={()=>
                                setIntoleranceName(item)}>
                                     {item}
                                </div>
                            )
                        })}
                    </div>
                </div>
                </div>


                <div className="num-input">
                    <div>
                        <label htmlFor="cal">Max amount of calories:</label>
                        <input value={maxCal} onChange={(e)=>setMaxCal(e.target.value)} type="number" name="cal"/>
                    </div>
                    <div>
                        <label htmlFor="sugar">Max amount of Sugar(In grams):</label>
                        <input value={maxSugar} onChange={(e)=>setMaxSugar(e.target.value)} type="number" name="sugar"/>
                    </div>
                </div>

                <input type="submit" className="hero-btn" value='APPLY FILTER' onClick={submit}/>
           
            </div>
            </form>


            <div className="category-result">
                {loading && <h1>Loading...</h1> }
                {displayArray && <FoodArray displayArray={displayArray}></FoodArray>}
            </div>
                {foodArray && <Pagination currentPage={currentPage} array={foodArray} pagination={pagination}></Pagination>}
            </div>
        </div>
     );
}
 
export default Plans;