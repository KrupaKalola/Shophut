import React, { Fragment } from 'react'
import { Grid, Container } from '@material-ui/core'

import ProductsCard from '../components/products_card'

import List from '../../ListItem.json'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart } from '../../Redux'

import './product.css'

function SpecificProduct(props) {

    const handleAddItemToCart = (product) => {
        debugger
        console.log(product)
        props.addTOCart(product)
    }

    const { id, category } = useParams()
    console.log(id)
    return (
        <Fragment>
            <Container>
                <p style={{ fontSize: '25px', textTransform: 'uppercase', color: '#3ba66b', margin: '8px' }}>
                    {category}
                </p>
                <Grid container spacing={2} wrap='wrap'>
                    {
                        List.map((data, index) => {
                            debugger
                            console.log('categoryId')

                            if (data.categoryId === id) {
                                console.log(data.items)
                                {
                                    return data.items.map((data) => {
                                        console.log(data)
                                        return <ProductsCard addItemsTOCart={handleAddItemToCart} data={data} />
                                    })
                                }
                            }
                        })
                    }
                </Grid>
            </Container>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        badge: state.badge,
        cart: state.cartItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTOCart: (product) => dispatch(addToCart(product))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SpecificProduct)
