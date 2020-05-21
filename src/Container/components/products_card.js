import React, { Fragment } from 'react'
import { Card, CardContent, CardActions, CardActionArea, Typography, Box, IconButton, Grid } from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';
import './products_card.css'

import fruit1 from '../../images/fruit1.jpg'

function ProductsCard(props) {
    return (
        <Fragment>

{/* {
                props.List.map((data, index) => {
                    if (index< 4) {
                        console.log(data.items[index].name)
                        return */}
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
                                                <Rating name="read-only" value={props.data.ratin0 } readOnly />
                                            </Box>
                                        </Typography>
                                        <Typography style={{ color: '#3ba66b', fontWeight: '300' }} className='product-price'>
                                            ${props.data.price}
                                        </Typography>   
                                        <Typography className='product-cart' onClick={() => props.addItemsTOCart(props.data)}>
                                            <IconButton style={{ padding: '0px' }}>
                                                <ShoppingCart />
                                            </IconButton>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </Grid>

                     {/* }
                 })
             } */}

        </Fragment>
    )
}

export default ProductsCard
