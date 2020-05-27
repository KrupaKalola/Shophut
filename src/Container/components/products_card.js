import React, { Fragment, useState } from 'react'
import { Card, CardContent, CardActionArea, Typography, Box, IconButton, Grid, Grow } from '@material-ui/core'
import { ShoppingCart, Category } from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';

import { connect } from 'react-redux'
import { updateQuantity } from '../../Redux'

import Quantity_section from '../components/quantity_section'


import './products_card.css'
import fruit1 from '../../images/fruit1.jpg'

function ProductsCard(props) {


    const isAddedStatus = (status, quantity , id) => {
        debugger
        console.log('status:' , status )
        if (status == true) {
            return <Quantity_section quantity={quantity} id={id} cart={props.cart} updateQuantity={props.updateQuantity}/>
        }
        else {
            return <Typography className='product-cart' onClick={() => props.addItemsTOCart(props.data)} >
                <IconButton style={{ padding: '0px' }}>
                    <ShoppingCart />
                </IconButton>
            </Typography>
        }
    }

    return (
        <Fragment>
            <Grow in='true'
                style={{ transformOrigin: "0 0 0" }}
                {...(true ? { timeout: 1000 } : {})}
            >
                <Grid item lg='3'>
                    <Card style={{ textAlign: 'center' }} className='product-wrapper'>
                        <CardActionArea>
                            <img src={fruit1} height='150px'></img>

                            <CardContent>
                                <Typography gutterBottom variant="subtitle1" component="h2">
                                    {props.data.name}
                                </Typography>
                                <Typography>
                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                        <Rating name="read-only" value={props.data.rating} readOnly />
                                    </Box>
                                </Typography>
                                <Typography style={{ color: '#3ba66b', fontWeight: '300' }} className='product-price'>
                                    ${props.data.price}
                                </Typography>

                                {isAddedStatus(props.data.isAdded, props.data.quantity , props.data.id)}

                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>
            </Grow>

        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cartItem,
        list: state.list
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateQuantity: (obj)=>dispatch(updateQuantity(obj))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsCard)
