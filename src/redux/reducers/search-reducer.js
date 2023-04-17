



const initialState = {
    search: []
}

export const searchReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "SEARCH":
          return{
            search: action.payload
          }
    
        default:
            return state
    }
}