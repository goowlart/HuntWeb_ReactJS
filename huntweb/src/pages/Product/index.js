import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';
export default class Product extends Component {
 state = {
    product: {},
};

async componentDidMount () { //methode
    const { id } = this.props.match.params; //to access this property in the API
  
    const response = await api.get(`/products/${id}`);//loads the product information

    this.setState({ product: response.data });
}

    render () {
        const { product } = this.state;
    
        return(
            <div className="product-info">
             <h1>{product.title}</h1>
             <p>{product.description}</p>

             <p>
                  URL : <a href={product.url}>{product.url}</a>
             </p>
            </div>
        ); 
 }
}