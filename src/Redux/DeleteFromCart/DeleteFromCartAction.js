import { DELETE_FROM_CART } from './DeleteFromCartTypes'

export const deleteFromCart=({product , cart})=>{

    return{
        type: DELETE_FROM_CART,
        payload: {product, cart}
    }
}