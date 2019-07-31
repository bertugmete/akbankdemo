import React, {Component} from 'react';
import axios from 'axios';

const ProductContext = React.createContext();

//Provider, Consumer

const reducer = (state,action) => {
    switch(action.type){
        case "ADD_PRODUCT":
            return {
                ...state,
                products : [...state.products,action.payload]
            }
        default:
            return state            
    }
}

export class ProductProvider extends Component{

    state = {
        products:[],
        dispatch : action => {
            this.setState(state => reducer(state,action))
        }
    }

    componentDidMount = async() => {
        const response = await axios.get("http://localhost:3010/products")
        this.setState({
            products : response.data.products
        })
    }

    render(){
        return (
            <ProductContext.Provider value={this.state}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export default ProductConsumer;