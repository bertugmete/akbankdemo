import React, {Component} from 'react';
import ProductConsumer from '../context';
import Product from './Product';

class Products extends Component{
    render(){
        return(
            <ProductConsumer>
                {
                    value => {
                        const products = value.products;
                        return(
                            <div>
                                <table className="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Works</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                    products&&products.map(product => {
                                        return(
                                            <Product
                                                key = {product.id}
                                                name = {product.name}
                                                category = {product.category}
                                                price = {product.price}
                                                id = {product.id}
                                            />

                                        )
                                    })
                                    }
                                    </tbody>
                                </table>

                            </div>
                        )
                    }
                }
            </ProductConsumer>
        )

        // return(
        //     <div>

        //     </div>
        // )
    }
}

export default Products;