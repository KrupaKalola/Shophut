import { ADD_TO_CART, UPDATE_QUANTITY } from './AddToCartTypes'
import { DELETE_FROM_CART } from '../DeleteFromCart/DeleteFromCartTypes'
import List from '../../ListItem.json'

const initialState = {
    badge: 0,
    cartItem: [],
    list: List
}

const AddToCartReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case ADD_TO_CART: {

            const product = action.payload;
            const cart = state.cartItem;
            const list = state.list;
            console.log(action.payload)
            const existingProductIndex = findProductIndex(cart, product.id)

            const updatedCart = existingProductIndex >= 0
                ? updateProductQuantity(cart, product)
                : [...cart, product];
            const updatedList = existingProductIndex < 0 ? updateProductStatus(list, product) : [...list]

            console.log('updatedList inside: ', updatedList)
            return Object.assign({}, state, {
                badge: existingProductIndex < 0 ? state.badge + 1 : state.badge,
                cartItem: updatedCart,
                list: updatedList
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

            // console.log('action: ', action)

            const updatedCart = [...cart]
            // console.log('Cart:', updatedCart)

            const updateProductIndex = findProductIndex(cart, newQuantityId)
            // console.log('updateProductIndex: ', updateProductIndex)

            const productTOUpdate = updatedCart[updateProductIndex]
            // console.log('productTOUpdate: ', productTOUpdate)

            const updatedQuantityproduct = { ...productTOUpdate, quantity: newQuantity }
            // console.log('updatedQuantityproduct: ', updatedQuantityproduct)

            updatedCart[updateProductIndex] = updatedQuantityproduct;
            // console.log('updatedCart: ', updatedCart)

            console.log('updatedCart: ', updatedCart)

            return Object.assign({}, state, {
                cartItem: updatedCart

            })
        }

        default: return state
    }
}

const findProductIndex = (cart, productID) => {
    // console.log('findProductIndex cart', productID, cart)
    return cart.findIndex(p => p.id === productID);
}

const updateProductQuantity = (cart, product) => {
    const productIndex = findProductIndex(cart, product.id)

    const updatedCart = [...cart];
    const existingProduct = updatedCart[productIndex];

    const updatedQuantityProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + product.quantity,
    };
    // console.log('updatedQuantityProduct:', updatedQuantityProduct)
    updatedCart[productIndex] = updatedQuantityProduct;

    return updatedCart;
}

const updateProductStatus = (list, product) => {
    const updatedList = [...list];

    list.map((data, index) => {
        const items = data.items
        const productIndex = findProductIndex(data.items, product.id)
        console.log("updateProductState : ", productIndex)

        if (productIndex >= 0) {
            console.log('items :', items)

            const existingProduct = items[productIndex];
            console.log('existingProduct :', existingProduct)

            const updateStatus = {
                ...existingProduct,
                isAdded: true
            }
            console.log('updateStatus : ', updateStatus)

            items[productIndex] = updateStatus;
            console.log("After updaating items :", items)

            const updatedListCategory = { ...updatedList[index], items }

            // updatedListCategory = [...updatedListCategory , items]
            console.log('updatedListCategory :', updatedListCategory)

            updatedList[index] = updatedListCategory
            console.log('updatedList :', updatedList)
        }


    })
    return updatedList
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
