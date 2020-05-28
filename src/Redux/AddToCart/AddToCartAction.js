import { ADD_TO_CART , DELETE_FROM_CART , UPDATE_QUANTITY} from './AddToCartTypes'


export const addToCart=([{id, name, rating, price, quantity, isAdded} , categoryID])=>{
    debugger
    return{
         type: ADD_TO_CART,
         payload: [{id, name, rating, price, quantity, isAdded} , categoryID]
     }
}

export const updateQuantity=({quantity, cart, categoryId, id})=>{
    debugger
    return{
         type: UPDATE_QUANTITY,
         payload: {quantity, cart, categoryId, id}
     }
}

export const deleteFromCart=({product , cart, categoryId})=>{

    return{
        type: DELETE_FROM_CART,
        payload: {product, cart, categoryId}
    }
}