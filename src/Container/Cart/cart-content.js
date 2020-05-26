import React, { Fragment, useState } from 'react'
import fruit1 from '../../images/fruit1.jpg'
import './cart-content.css'
import './quantity-square.css'
import { Grid, Button, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { DeleteOutlineOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'


function CartContent(props) {
console.log("cart: ", props.cart)
    const countItem = props.cart.length
    let price = 0
    // const [open, setOpen] = useState(false);
    const [deleteItem , setDeleteItem ] = useState({id:'', cart:'', open:false})

    const handleClickOpen = (id) => {
        // setOpen(true);
        setDeleteItem({
            id: id,
            cart: props.cart,
            open: true
        })

    };

    const handleClose = () => {
        setDeleteItem({... {open:false}});
        console.log(deleteItem)
    };

    const handleDelete = () => {
        debugger
        props.deleteFromCart(deleteItem)
        setDeleteItem({... {open:false}});

    }

    const handleChange = (e, id) => {
        const p = e.target.parentNode.parentNode.getAttribute("id")
        console.log(p)
debugger
        if (p === 'minus') {
            let value = e.target.parentNode.parentNode.nextSibling.value
            let minus = parseInt(value) - 1
            if (minus > 0) {
                e.target.parentNode.parentNode.nextSibling.value = minus
            }
            else {
                minus = 1
                e.target.parentNode.parentNode.nextSibling.value = minus
            }
            const obj = {
                quantity: minus,
                cart: props.cart,
                id: id
            }
            props.updateQuantity(obj)
        }
        if (p === 'plus') {
            let value = e.target.parentNode.parentNode.previousSibling.value
            const sum = parseInt(value) + 1

            e.target.parentNode.parentNode.previousSibling.value = sum
            const obj = {
                quantity: sum,
                cart: props.cart,
                id: id
            }
            props.updateQuantity(obj)
        }
    }

    // const handleQuanitityChange = (e, id) => {
    //     const obj = {
    //         quantity: e.target.value,
    //         cart: props.cart,
    //         id: id
    //     }
    //     console.log(obj)
    //     props.updateQuantity(obj)
    // }

    //Conditoinally render cartItems 
    let display
    if (props.cart.length > 0) {
        display = <ul>
            {props.cart.map((product) => {
                console.log(props.cart)
                price += product.price * product.quantity
                return (
                    <li key='index'>
                        <Grid container justify='space-evenly'>
                            <Grid item lg='2' style={{ margin: 'auto 0' }}>
                                <img src={fruit1} height='120' width='120'></img>
                            </Grid>
                            <Grid item lg='6'>
                                <p>
                                    {product.name}
                                </p>
                                <p>1 kg</p>
                                <p>${product.price}</p>

                            </Grid>
                            <Grid item lg='2'>
                                <p>Qty:</p>
                                <div className='quantity-square'>
                                    <span id='minus' onClick={(e) => handleChange(e, product.id)}><FontAwesomeIcon icon={faMinus} ></FontAwesomeIcon></span>
                                    <input type='type' value={product.quantity} style={{ width: '50px' }} readOnly />
                                    <span id='plus' onClick={(e) => handleChange(e, product.id)}><FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon></span>
                                </div>
                            </Grid>
                            <Grid item lg='1'>
                                <p>Total</p>
                                <p>${product.price * product.quantity}</p>
                            </Grid>
                            <Grid item lg='1'>
                                <IconButton onClick={() => handleClickOpen(product.id)}>
                                    <DeleteOutlineOutlined color='error' />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </li>
                )
            })}

        </ul>
    } else {
        display = <div className="empty-cart">
            <div className='empty-cart-content'>
                <p>Our cart is empty</p>
                <p>Begin shoping now</p>
                <Link to='/'>
                    <Button variant='contained'>Add Items</Button>
                </Link>
            </div>
        </div>
    }


    return (
        <Fragment>

            <div style={{ backgroundColor: '#f1f1f1', height: 'calc(100vh - 64px)' }}>
                <p style={{ fontSize: '25px', textTransform: 'uppercase', color: '#3ba66b', textAlign: 'center', margin: '0', paddingTop: '25px' }}>
                    Shopping Cart
                </p>
                <Grid container justify='center' alignItems='flex-start'>
                    <Grid item lg='8' className="my-cart" >

                        {display}

                    </Grid>
                    <Grid item lg='3' style={{ margin: '20px' }}>

                        <div style={{ backgroundColor: '#fff', padding: '10px' }}>
                            <h3 style={{ margin: '0' }}>Product Detail</h3>
                            <hr />
                            <Grid container style={{ margin: '18px 0' }}>
                                <Grid item lg='10' >
                                    Price ({countItem} Items)
                            </Grid>
                                <Grid item lg='2' style={{ textAlign: 'end' }}>
                                    ${price}
                                </Grid>
                            </Grid>
                            <Grid container style={{ margin: '18px 0' }}>
                                <Grid item lg='10'>
                                    Delivery Fee
                            </Grid>
                                <Grid item lg='2' style={{ textAlign: 'end' }}>
                                    Free
                            </Grid>
                            </Grid>
                            <hr />
                            <Grid container >
                                <Grid item lg='10'>
                                    <h3 style={{ marginTop: '0' }}>Total Amount</h3>
                                </Grid>
                                <Grid item lg='2' style={{ textAlign: 'end' }}>
                                    ${price}
                                </Grid>
                            </Grid>
                            <Button variant='contained' style={{ backgroundColor: '#2eab70', color: '#fff' }}>
                                Checkout
                        </Button>
                        </div>

                    </Grid>
                </Grid>
            </div>

            <Dialog
                    open={deleteItem.open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Conformation</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                           Are you sure, you want to remove item from cart? 
                </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                </Button>
                        <Button onClick={handleDelete} style={{color:"#f00"}} autoFocus>
                            Delete
                </Button>
                    </DialogActions>
                </Dialog>
        </Fragment>
    )
}


export default CartContent
