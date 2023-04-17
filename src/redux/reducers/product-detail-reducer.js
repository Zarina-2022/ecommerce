const initialState = {
    product: {}
}

export const productDetailReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "GET_DETAILS":
          return{
            ...state,
            product: action.payload
          }
    
        default:
            return state
    }
}