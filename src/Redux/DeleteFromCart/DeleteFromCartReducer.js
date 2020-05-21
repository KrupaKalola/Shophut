// import { DELETE_FROM_CART } from './DeleteFromCartTypes'

// const initialState = {
//     // cartItem:[]
// } 

// const DeleteFromCartReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case DELETE_FROM_CART: {
//             const cart= action.payload.cart
//             const deleteId = action.payload.id

//             const afterRemoveCart= cart.filter(p=>p.id!== deleteId)

//             // Object.assign({}, state, {cartItem: afterRemoveCart})
//             console.log(afterRemoveCart)

//         } 
//         default: return state
//     }
// }
// export default DeleteFromCartReducer;