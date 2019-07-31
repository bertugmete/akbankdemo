import React, { Component } from 'react';
import ProductConsumer from '../context';
import axios from 'axios';
import FormGroup from '../components/baseComponents/formGroup';
import Input from '../components/baseComponents/input';
import Label from '../components/baseComponents/label';

class AddProduct extends Component {

    state = {
        name: '',
        category: '',
        price: '',
        description: '',
        error: false
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validateForm = () => {
        const { name, category, price, description } = this.state;

        if (name === '' || category === '' || price === '' || description === '') {
            return false;
        }
        return true;
    }

    addProduct = async (dispatch, e) => {
        e.preventDefault();
        const { name, category, price, description } = this.state;

        const newProduct = {
            name,
            category,
            price,
            description
        }

        if (!this.validateForm()) {
            this.setState({
                error: true
            })
            return;
        }

        const response = await axios.post("http://localhost:3010/products", newProduct);
        console.log(response);
        dispatch({ type: "ADD_PRODUCT", payload: response.data });

        this.props.history.push('/products');
    }

    render() {
        const { name, category, price, description, error } = this.state;

        return <ProductConsumer>
            {
                value => {
                    const { dispatch } = value;
                    return (
                        <div className="card">
                            <div className="card-header">
                                <h4>Add Product Form</h4>
                            </div>
                            <div className="card-body">
                                {
                                    error ?
                                        <div className="alert alert-danger">
                                            Lütfen bilgileri kontrol ediniz
                                </div>
                                        : null
                                }
                                <form onSubmit={this.addProduct.bind(this, dispatch)}>
                                    <FormGroup>
                                        <Label text='Name'></Label>
                                        <Input name = "name" onChange={this.changeInput} value={name} placeholder= 'Name'></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label text="Category"></Label>
                                        <Input name = "category" onChange={this.changeInput} value={category} placeholder= 'Category'></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label text = 'Price'></Label>
                                        <Input name="price" onChange={this.changeInput} value={price} placeholder='Price'></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label text='Description'></Label>
                                        <Input name='description' onChange={this.changeInput} value={description} placeholder='Description'></Input>
                                    </FormGroup>
                                    <button className="btn btn-danger btn-block" type="submit">Add</button>
                                </form>
                            </div>
                        </div>
                    )
                }


            }
        </ProductConsumer>
    }
}

export default AddProduct;