import { useReducer } from "react";
import { createContext } from "react";
import reducer from "./reducer";

const Context = createContext()


const initialState = {
    navOpen:false,
    key1 : 'c32507cf9b704fe39e1e33d439b7afdd',
}


const ContextProvider = (props) => {
    const [ state, dispatch ] = useReducer(reducer, initialState)

    const openNav = () => {
        dispatch({type:'OPEN_NAV'})
    }

    const closeNav = () => {
        dispatch({type:'CLOSE_NAV'})
    }

    return ( 
        <Context.Provider value={{...state, openNav, closeNav}}>
            {props.children}
        </Context.Provider>
     );
}
 
export {ContextProvider, Context};