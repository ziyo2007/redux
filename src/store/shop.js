const initialState = []

function Shop (state=initialState,action){
    if(action.type == 'ADD'){
        let item = action.payload
        state.push(item)
        return state
    }else{
        return state
    }
}