import { combineReducers } from 'redux'
import AddToCartReducer from './AddToCart/AddToCartReducer'
import DeleteFromCartReducer from './DeleteFromCart/DeleteFromCartReducer'
const RootReducer = combineReducers({
    addToCart: AddToCartReducer,
    deleteFromCart: DeleteFromCartReducer
})

export default RootReducer;