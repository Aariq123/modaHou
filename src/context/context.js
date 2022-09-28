import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import reducer from "./reducer";

const Context = createContext()


 
const initialState = {
    navOpen:false,
    key1 : 'c32507cf9b704fe39e1e33d439b7afdd',
    key2: 'e5b16748d6824700bc7032d4633c0c19',
    favourites:[]
}



const ContextProvider = (props) => {
    const [ state, dispatch ] = useReducer(reducer, initialState,
        ()=>{
            const localData = localStorage.getItem('favourites');
            return  {
                navOpen:false,
                key1 : 'c32507cf9b704fe39e1e33d439b7afdd',
                key2: 'e5b16748d6824700bc7032d4633c0c19',
                favourites: localData ? JSON.parse(localData) : []
            }
        }
    )

    const openNav = () => {
        dispatch({type:'OPEN_NAV'})
    }

    const closeNav = () => {
        dispatch({type:'CLOSE_NAV'})
    }

    const addToFavourites = (recipe) => {
      dispatch({type:'ADD_TO_FAVOURITES', recipe})
    }

    const deleteFavourites = (recipe) => {
        dispatch({type:'DELETE_FAVOURITES', recipe})
    }
    
    const clearFavourites = () => {
        dispatch({type:'CLEAR_FAVOURITES'})
        localStorage.removeItem('favourites');
    }

    useEffect(()=>{
        localStorage.setItem('favourites', JSON.stringify(state.favourites))
    },[state.favourites])
 

    console.log(state.favourites)
    return ( 
        <Context.Provider value={{...state, clearFavourites, openNav, closeNav, addToFavourites, deleteFavourites}}>
            {props.children}
        </Context.Provider>
     );
}
 
export {ContextProvider, Context};