const Reducer = (state, action) => {
    if(action.type == 'OPEN_NAV'){
        return {...state, navOpen:true}
    }

    if(action.type == 'CLOSE_NAV'){
        return {...state, navOpen:false}
    }

    if(action.type == 'ADD_TO_FAVOURITES'){
       return {...state, favourites:[...state.favourites, action.recipe]}
    }

    if(action.type == 'DELETE_FAVOURITES'){
        const ligma =  JSON.parse(localStorage.getItem('favourites'));
        const sugma = ligma.filter(item => item.id !== action.recipe)

        return {...state, favourites:sugma}
    }

}
 
export default Reducer;