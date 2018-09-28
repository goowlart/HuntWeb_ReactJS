import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';
export default class Main extends Component{
  state = {  //all variables are started within the state
      products: [],
      productInfo: {},
      page: 1,
      pageNumber: 0,
  };
  
    componentDidMount(){ //performs an action as soon as the component is displayed on the screen
        this.loadProducts();
    }

    loadProducts = async (page = 1) => { //all the functions created must be in Arrow functions
        const response = await api.get(`/products?page=${page}`); //passed the parameter to find the number of pages

        const { docs, ...productInfo } = response.data; //storing all date information within a variable

        this.setState({ products: docs, productInfo, page }); //giving my variable the value of my route
       // console.log (response.data.docs);
    };

    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return; 

        const pageNumber = page - 1;
        
        this.loadProducts(pageNumber);
    };

    nextPage = () => {
      const { page, productInfo } = this.state;
      
      if (page === productInfo.pages) return; //check the number of pages if it is the last page it will do nothing
      
      const pageNamber = page +1;

      this.loadProducts(pageNamber);
    };

    render() {
        const { products, page, productInfo } = this.state;

        return (
            <div className='product-list'>
            {products.map(product => (
               <article key={product._id}>
               <strong>{product.title}</strong>
               <p>{product.description}</p>
               <Link to={`/products/${product._id}`}>Access</Link>
               </article>
            ))}
            <div className='actions'>
              <button disabled={page === 1} onClick={this.prevPage}>Previous</button>
              <button disabled={page === productInfo.pages} onClick={this.nextPage}>Next</button>              
               </div>
            </div>
        );
    } 
}
//<a href="">Access</a>  replacement