import { DELETE_FROM_CART } from './DeleteFromCartTypes'

export const deleteFromCart=({id , cart})=>{

    return{
        type: DELETE_FROM_CART,
        payload: {id, cart}
    }
}