import { useEffect } from 'react'
import { useContext } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Context } from '../context/context'

const RecipeInfo = () => {
    const { key1, key2,  addToFavourites } = useContext(Context)
    const location = useLocation()
    const { id } = location.state
    const [ description, setDescription ] = useState()
    const desRef = useRef(null)
   let instructionArray = []
  

    useEffect(()=>{
        const getRecipes = async () => {
            const ligma = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${key2}`)
            const data = await ligma.json()
            console.log(data)
            setDescription(data)
        }
        
        getRecipes()
    },[])

    useEffect(()=>{
        if(desRef){
            if(description){
                desRef.current.innerHTML = description.summary
            }
        }
    },[description, desRef.current])
    
    
           
   if(description){
      description.analyzedInstructions.map(item=>{
                item.steps.map(ligma=>{
                    instructionArray.push(ligma)
                })
            })
    }


    return ( 
        <div className="recipe-info">
            {description && 
            <div>
                <div className='recipe-info-img'>
                    <img src={description.image} alt="Couldn't load image" />
                </div>
            <div className="container">
                <div className="description-heading">
                    <div className="add">
                        <h1>{description.title}</h1>
                        <button onClick={()=>addToFavourites({id:description.id, image:description.image, title:description.title})} className="login-btn">Add to favourites</button>
                    </div>
                    <div className="descrip">
                        <div className='summary-div'>
                            <div className="summary" >
                                <p ref={desRef}></p>
                            </div>
                        </div>
                        <div className='cook-time'>
                            <div>
                                <p className='bold'>Total Time:</p> 
                                <p>{description.readyInMinutes} min<i className="fa-regular fa-clock"></i></p>
                            </div>
                            <div>
                                <p className='bold'>Diets:</p>
                                <div>
                                    {description.diets.map((diet,i)=>
                                    {
                                        return(
                                            <p style={{'textTransform':'capitalize'}} key={i}>{diet},</p>
                                        )
                                    })}
                                </div>
                            </div>
                            <div>
                                <p className='bold'>Vegan:</p> 
                                <p>{description.vegan ? 'Yes' : 'No' }</p>
                            </div>
                            <div>
                                <p className='bold'>Dairy Free:</p> 
                                <p>{description.dairyFree ? 'Yes' : 'No' }</p>
                            </div>
                            <div>
                                <p className='bold'>Price:</p> 
                                <p>{description.pricePerServing} Tk</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="extra-descrip">
                    <div className="ingredients">
                        <h2>Ingredients</h2>
                        <div>
                        {description.extendedIngredients.map((item, i) =>{
                            return(
                                <div className="ingredient" key={i}>
                                    <img src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`} alt="Couldn't load image" />
                                    <div>
                                        <p className='ingredient-name'>{item.name}</p>
                                        <p>{item.amount} {item.unit}</p>
                                    </div>
                                </div>
                            )
                        }
                        )}
                        </div>
                    </div>
                    <div className="nutrition">
                        <h2>Nutrition Values</h2>
                        <div>
                        {description.nutrition.nutrients.map((item, i) =>{
                            return(
                                <div className="nutritions" key={i}>
                                    <p>{item.name}</p>
                                    <p>{item.amount} {item.unit}</p>
                                </div>
                            )
                        }
                        )}
                        </div>
                    </div>
                </div>

                <div className="instructions">
                    <h2>Instructions</h2>
                    {!instructionArray.length > 0 && <p>No insturctions. Get nae nae'd bitch.<i className="fa-regular fa-face-grin-squint-tears"></i> </p>}
                    { 
                      instructionArray.length > 0 &&
                      instructionArray.map((sugma, i)=>{
                        return(
                            <div className="instruction" key={i}>
                                <p className='instruc-num'>{i+1}</p>
                                <p className='instruc-p'>{sugma.step}</p>
                            </div>
                        )
                      })
                    }
                </div>

                
            </div>
        </div>
        }
        </div>
     );
}
 
export default RecipeInfo;