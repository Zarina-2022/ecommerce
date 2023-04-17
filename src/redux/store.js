import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { drawerReducer } from "./reducers/drawer-reducer";
import { productsReducer } from "./reducers/products-reducer";
import { productDetailReducer } from "./reducers/product-detail-reducer";
import { cardReducer } from "./reducers/card-reducer";
import { searchReducer } from "./reducers/search-reducer";

const cardItems = JSON.parse(localStorage.getItem('cardItems')) || []

let initialState = {
  card: {cardItems}
};

const reducers = combineReducers({
    drawer: drawerReducer,
    products: productsReducer,
    product: productDetailReducer,
    card: cardReducer,
    search: searchReducer
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);


export default store