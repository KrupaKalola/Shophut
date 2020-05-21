import React, { Fragment } from 'react'
import { Grid, Container } from '@material-ui/core'

import ProductsCard from '../components/products_card'

import List from '../../ListItem.json'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart } from '../../Redux'

import './product.css'

function SpecificProduct() {

    const handleAddItemToCart = (product) => {
        this.props.addTOCart(product)
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
                                    return data.items.map((item) => {
                                        console.log(item)
                                        return <ProductsCard addItemsTOCart={handleAddItemToCart} data={item} />
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


const mapDispatchToProps = dispatch => {
    return {
        addTOCart: (product) => dispatch(addToCart(product))
    }
}


export default connect(mapDispatchToProps)(SpecificProduct)
