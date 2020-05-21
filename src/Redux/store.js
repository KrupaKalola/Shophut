import {createStore} from 'redux'
import AddToCartReducer from './AddToCart/AddToCartReducer'

const store = createStore(AddToCartReducer)

export default store