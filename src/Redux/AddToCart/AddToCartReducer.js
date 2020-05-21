import { ADD_TO_CART, UPDATE_QUANTITY } from './AddToCartTypes'
import { DELETE_FROM_CART } from '../DeleteFromCart/DeleteFromCartTypes'
import { ContactSupportOutlined } from '@material-ui/icons';

const initialState = {
    badge: 0,
    cartItem: []
}

const AddToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            debugger;
            const product = action.payload;
            const cart = state.cartItem;
            console.log(action.payload)
            const existingProductIndex = findProductIndex(cart, product.id)

            const updatedCart = existingProductIndex >= 0
                ? updateProductQuantity(cart, product)
                : [...cart, product];

            return Object.assign({}, state, {
                badge: existingProductIndex < 0 ? state.badge + 1 : state.badge,
                cartItem: updatedCart
            })
        }
        case DELETE_FROM_CART: {
            const cart = action.payload.cart
            const deleteId = action.payload.id

            const afterRemoveCart = cart.filter(p => p.id !== deleteId)

            return Object.assign({}, state, {
                badge: state.badge - 1,
                cartItem: afterRemoveCart
            })
        }

        case UPDATE_QUANTITY: {
            debugger
             
            const cart = action.payload.cart
            const newQuantity = action.payload.quantity
            const newQuantityId = action.payload.id

            console.log('action: ', action)

            const updatedCart = [...cart]
            console.log('Cart:' , updatedCart)

            const updateProductIndex = findProductIndex(cart, newQuantityId)
            console.log('updateProductIndex: ', updateProductIndex)

            const productTOUpdate = updatedCart[updateProductIndex]
            console.log('productTOUpdate: ', productTOUpdate)

            const updatedQuantityproduct = { ...productTOUpdate, quantity: newQuantity }
            console.log('updatedQuantityproduct: ' , updatedQuantityproduct)

            updatedCart[updateProductIndex] = updatedQuantityproduct;
            console.log('updatedCart: ', updatedCart)

            return Object.assign({}, state, {
                cartItem: updatedCart
            })
        }

        default: return state
    }
}

const findProductIndex = (cart, productID) => {
    debugger
    console.log(productID)
    return cart.findIndex(p => p.id === productID);
}

const updateProductQuantity = (cart, product) => {
    const productIndex = findProductIndex(cart, product.id)

    const updatedCart = [...cart];
    const existingProduct = updatedCart[productIndex];

    const updatedQuantityProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + product.quantity
    };

    updatedCart[productIndex] = updatedQuantityProduct;

    return updatedCart;
}

// const existingProduct = this.state.CartItem.filter(p => p.id === product.id)
//             console.log('existingProduct', existingProduct)
//             if (existingProduct.length > 0) {
//                 const withoutExistingProduct = this.state.CartItem.filter(p => p.id !== product.id)
//                 console.log('withoutExistingProduct', withoutExistingProduct)
//                 const updateQuantity = {
//                     ...existingProduct[0], quantity: existingProduct[0].quantity + product.quantity
//                 }
//                 this.setState({ CartItem: [...withoutExistingProduct, updateQuantity] })
//                 setTimeout(() => { localStorage.setItem('CartItem', JSON.stringify(this.state.CartItem)) }, 500)

//             }
//             else {
//                 this.setState({ CartItem: [...this.state.CartItem, product], badge: this.state.badge + 1 })
//                 setTimeout(() => {
//                     localStorage.setItem('CartItem', JSON.stringify(this.state.CartItem))
//                     localStorage.setItem('badge', this.state.badge)
//                 }, 500)
//             }


export default AddToCartReducer
