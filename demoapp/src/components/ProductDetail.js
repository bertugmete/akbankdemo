import React, { Component } from 'react'
import axios from 'axios';

class ProductDetail extends Component {

    state = {
        id: '',
        category:'',
        price:'',
        description: '',
        name:''
    }

    componentDidMount = async () => {
        const pid = this.props.match.params.id;
        const response = await axios.get(`http://localhost:3010/products/${pid}`);
        const {id,name,category,price,description} = response.data;
        this.setState({
            id,
            category,
            price,
            description,
            name
        })
    }

    render() {
        return(
            <div className="col-md-8">
                <div className="card-header">
                    <h4>Name: {this.state.name}</h4>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <p>Id: {this.state.id}</p>
                    </div>
                    <div className="form-group">
                        <p>Name: {this.state.name}</p>
                    </div>
                    <div className="form-group">
                        <p>Category: {this.state.category}</p>
                    </div>
                    <div className="form-group">
                        <p>Price: {this.state.price}</p>
                    </div>
                    <div className="form-group">
                        <p>Description: {this.state.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetail;