import { ADD_TO_CART, UPDATE_QUANTITY, DELETE_FROM_CART } from './AddToCartTypes'
import List from '../../ListItem.json'
import { Category } from '@material-ui/icons'

const initialState = {
    badge: 0,
    cartItem: [],
    list: List
}

const AddToCartReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case ADD_TO_CART: {
            const product = action.payload[0];
            const cart = state.cartItem;
            const list = state.list;
            const isAdded = true;
            const categoryId = action.payload[1]
            console.log('befor cart:', cart)
            const existingCategoryIndex = findCategoryIndex(cart, categoryId)

            console.log("existingCategoryIndex :", existingCategoryIndex)
            const updatedCart = addNewProduct(cart, categoryId, product);


            const updatedList = existingCategoryIndex < 0 ? updateProductStatus(list, product, categoryId, isAdded) : [...list]

            // console.log('updatedList inside: ', updatedList)
            return Object.assign({}, state, {
                badge: existingCategoryIndex < 0 ? state.badge + 1 : state.badge,
                cartItem: updatedCart,
                list: updatedList
            })
        }

        case DELETE_FROM_CART: {
            debugger
            const cart = action.payload.cart
            const product = action.payload.product
            const categoryId = action.payload.categoryId
            const list = state.list
            const isAdded = false

            console.log(" categoryId :", categoryId)
            let updatedCart = [...cart]
            console.log("updatedCart: ", updatedCart)

            const existingCategoryIndex = findCategoryIndex(cart, categoryId)
            console.log('existingCategoryIndex : ', existingCategoryIndex
            )

            const existingCategory = updatedCart[existingCategoryIndex]
            console.log('existingCategory: ', existingCategory)

            const items = existingCategory.items
            console.log("items: ", items)

            const afterRemoveCart = items.filter(p => p.id !== product.id)
            console.log("afterRemoveCart: ", afterRemoveCart)

            existingCategory.items = afterRemoveCart
            console.log("existingCategory: ", existingCategory)

            let category = []
            if (afterRemoveCart.length === 0) {
                category = updatedCart.filter(p => p.categoryId !== categoryId)
                console.log("AfterRemoveCart: ", category)

                updatedCart = category
                // return updatedCart
            }
            else {

                updatedCart[existingCategoryIndex] = existingCategory
                console.log('updatedCart: ', updatedCart)

            }
            console.log("category outside condition: ", category)

            const updatedList = updateProductStatus(list, product, categoryId, isAdded)

            return Object.assign({}, state, {
                badge: state.badge - 1,
                cartItem: updatedCart,
                list: updatedList
            })
        }

        case UPDATE_QUANTITY: {
            debugger
            const cart = action.payload.cart
            const newQuantity = action.payload.quantity
            const newQuantityId = action.payload.id
            const categoryId = action.payload.categoryId
            const list = state.list
            console.log('action: ', action)

            const updatedList = updateProductQuantity(list, categoryId, newQuantityId, newQuantity)

            const updatedCart = updateProductQuantity(cart, categoryId, newQuantityId, newQuantity)

            // const updatedCart = [...cart]
            // console.log('Cart:', updatedCart)

            // const updateProductIndex = findProductIndex(cart, newQuantityId)
            // // console.log('updateProductIndex: ', updateProductIndex)

            // const productTOUpdate = updatedCart[updateProductIndex]
            // // console.log('productTOUpdate: ', productTOUpdate)

            // const updatedQuantityproduct = { ...productTOUpdate, quantity: newQuantity }
            // // console.log('updatedQuantityproduct: ', updatedQuantityproduct)

            // updatedCart[updateProductIndex] = updatedQuantityproduct;
            // // console.log('updatedCart: ', updatedCart)

            // console.log('updatedCart: ', updatedCart)

            return Object.assign({}, state, {
                // cartItem: updatedCart
                list: updatedList

            })
        }

        default: return state
    }
}

const findCategoryIndex = (cart, categoryId) => {
    // console.log('findProductIndex cart', productID, cart)
    debugger
    return cart.findIndex(p => p.categoryId === categoryId);
}

const addNewProduct = (cart, categoryId, product) => {
    let updatedCart = [...cart]

    product = { ...product, quantity: product.quantity + 1 }

    const items = [product]

    const category = { categoryId: categoryId, items }

    updatedCart = [...updatedCart, category]

    return updatedCart

    // return [...cart, product]
}
const updateProductQuantity = (list, categoryId, newQuantityId, newQuantity) => {
    
    const updatedList = [...list]
    console.log("updatedList :", updatedList)

    const existingCategoryIndex = findCategoryIndex(list, categoryId)
    console.log('existingCategoryIndex: ', existingCategoryIndex)

    let existingCategory = updatedList[existingCategoryIndex]
    console.log("existingCategory: ", existingCategory)

    const items = existingCategory.items
    console.log("items: ", items)

    const productIndex = items.findIndex(p => p.id === newQuantityId)
    console.log('productIndex: ', productIndex)

    const existingProduct = items[productIndex]
    console.log("existingProduct: ", existingProduct)

    const updatedQuantityProduct = {
        ...existingProduct,
        quantity: newQuantity
    }
    console.log("updatedQuantityProduct: ", updatedQuantityProduct)

    items[productIndex] = updatedQuantityProduct
    console.log("items: ", items)

    existingCategory = { ...existingCategory, items }
    console.log("existingCategory: ", existingCategory)

    updatedList[existingCategoryIndex] = existingCategory
    console.log("updatedList: ", updatedList)

    return updatedList
}

const updateProductStatus = (list, product, categoryId, isAdded) => {

    const existingCategoryIndex = findCategoryIndex(list, categoryId)
    console.log('existingCategoryIndex: ', existingCategoryIndex)


    const updatedList = [...list];
    console.log("updatedList: ", updatedList)

    let existingCategory = updatedList[existingCategoryIndex]
    console.log('existingCategory: ', existingCategory)

    const items = existingCategory.items
    console.log("items :", items)

    const productIndex = items.findIndex(p => p.id === product.id)
    console.log("productIndex :", productIndex)

    const existingProduct = items[productIndex]
    console.log("existingProduct :", existingProduct)

    const updatedQuantityProduct = {
        ...existingProduct,
        isAdded: isAdded,
        quantity: isAdded === true ? existingProduct.quantity + 1 : 0
    }
    console.log("updatedQuantityProduct :", updatedQuantityProduct)

    items[productIndex] = updatedQuantityProduct
    console.log("items :", items)

    updatedList[existingCategoryIndex] = { ...existingCategory, items }
    console.log("updatedList :", updatedList)

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
