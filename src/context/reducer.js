const Reducer = (state, action) => {
    if(action.type == 'OPEN_NAV'){
        return {...state, navOpen:true}
    }

    if(action.type == 'CLOSE_NAV'){
        return {...state, navOpen:false}
    }

    if(action.type == 'ADD_TO_FAVOURITES'){
        state.favourites=[...state.favourites, action.recipe]
        let unique = [...new Map(state.favourites.map((m) => [m.id, m])).values()];
    

        return {...state, favourites:unique}
    }

    if(action.type == 'DELETE_FAVOURITES'){
        const ligma =  JSON.parse(localStorage.getItem('favourites'));
        const sugma = ligma.filter(item => item.id !== action.recipe)

        return {...state, favourites:sugma}
    }

    if(action.type == 'CLEAR_FAVOURITES'){
        return {...state, favourites:[]}
    }

}
 
export default Reducer;