import React, {Component} from 'react';
import ProductConsumer from '../context';
import {Link} from 'react-router-dom';

class Product extends Component{
    render(){
        const {id,name,category,price} = this.props;
        return(
            <ProductConsumer>
                {
                    value => {
                        return(
                                    <tr>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{category}</td>
                                        <td>{price}</td>
                                        <td><Link to= {`detail/${id}`} className='btn btn-danger'>detail</Link></td>
                                        {/* <td><a className="btn btn-danger" target="_blank" href={`http://localhost:3010/products/${id}`}>detail</a></td> */}
                                    </tr>
                        )
                    }
                }
            </ProductConsumer>
        )
    }
}

export default Product;