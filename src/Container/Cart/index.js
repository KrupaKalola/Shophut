import React, { Fragment } from 'react'
import CartContent from './cart-content'

import { connect } from 'react-redux'
import {deleteFromCart} from '../../Redux'
import { updateQuantity } from '../../Redux/AddToCart/AddToCartAction'

function Cart(props) {
    return (
        <Fragment>
            {/* <Header badge={props.badge}/> */}
            <CartContent cart={props.cart} deleteFromCart={props.deleteFromCart} updateQuantity={props.updateQuantity}/>
        </Fragment>
    )
}

const mapStateToProps=state=>{
    return {
        cart:state.cartItem,
        badge:state.badge
    }
}
const mapDispatchToProps = dispatch => {
    return {
        deleteFromCart: (id, cart) => dispatch(deleteFromCart(id, cart)),
        updateQuantity: (obj)=>dispatch(updateQuantity(obj))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
