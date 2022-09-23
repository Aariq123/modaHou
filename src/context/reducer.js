const Reducer = (state, action) => {
    if(action.type == 'OPEN_NAV'){
        return {...state, navOpen:true}
    }

    if(action.type == 'CLOSE_NAV'){
        return {...state, navOpen:false}
    }

}
 
export default Reducer;