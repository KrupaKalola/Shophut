import React, { Component, Fragment } from 'react'
import { Container, Grid } from '@material-ui/core'
import SliderMain from './slider'
import ProductsCard from '../components/products_card'
import Category from './Category'

import { connect } from 'react-redux'
import { addToCart } from '../../Redux'

class Home extends Component {
    

    handleAddItemToCart = (product, categoryId) => {
        // product.isAdded = true
        console.log(product , categoryId)
        debugger
        const obj = [ product , categoryId]
        this.props.addTOCart(obj)
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
                                        this.props.list.map((data, index) => {
                                            if (index < 4) {
                                                return <ProductsCard addItemsTOCart={this.handleAddItemToCart.bind(this)} data={data.items[index]} categoryId={data.categoryId}
                                                />
                                            }
                                        })
                                    }
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
        list: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTOCart: (product) => dispatch(addToCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);