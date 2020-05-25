import React, { Component, Fragment } from 'react'
import { Container, Grid } from '@material-ui/core'
import SliderMain from './slider'
import ProductsCard from '../components/products_card'
import Category from './Category'
import List from '../../ListItem.json'

import { connect } from 'react-redux'
import { addToCart } from '../../Redux'

class Home extends Component {


    handleAddItemToCart = (product) => {
        debugger
        product.isAdded = true
        console.log(product)
        this.props.addTOCart(product)
    }


    render() {
        return (
            <Fragment>
                {/* <Header badge={this.props.badge}/> */}
                <SliderMain />
                <Container>
                    <Grid container>
                        <Grid items lg="3" sm="12">
                            <Category />
                        </Grid>

                        <Grid item lg='9' sm='12'>
                            <p style={{ fontSize: '25px', textTransform: 'uppercase', color: '#3ba66b' }}>
                                Vegetables
                            </p>
                            <Grid container spacing={2}>
                                    {
                                        List.map((data, index) => {
                                            debugger
                                            console.log(data.items[index])

                                            if (index < 4) {
                                                return <ProductsCard addItemsTOCart={this.handleAddItemToCart.bind(this)} data={data.items[index]}
                                                />
                                            }
                                        })
                                    }
                                {/* <ProductsCard addItemsTOCart={this.handleAddItemToCart.bind(this)} List={List} /> */}
                            </Grid>

                        </Grid>
                    </Grid>
                </Container>
            </Fragment>
        )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);