import { ADD_TO_CART} from './AddToCartTypes'
import {UPDATE_QUANTITY} from './AddToCartTypes'


export const addToCart=({id, name, rating, price, quantity, isAdded})=>{
    
    return{
         type: ADD_TO_CART,
         payload: {id, name, rating, price, quantity, isAdded}
     }
}


export const updateQuantity=({quantity, cart, id})=>{
     debugger;
    
    return{
         type: UPDATE_QUANTITY,
         payload: {quantity, cart, id}
     }
}
