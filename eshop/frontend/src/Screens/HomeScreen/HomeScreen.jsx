import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from '../../actions/productActions';

const HomeScreen = (props) => {

  const productList = useSelector(state => state.productList);
  const {products, loading, error } = productList;
  const dispatch = useDispatch();  

  useEffect(() => {
   dispatch(listProducts());

    return () => {
      //
    };
  }, [])

  return loading ? <div>Loading...</div> :
    error? <div>{error}</div> :
      <ul className="products">
        {
          products.map(product => 
          <li key={product._id}>
            <div className="product">
            <Link to={'/product/' + product._id}>
                <img src={product.image} alt={product.name}></img>
            </Link>
                <div className="productName">
                    <Link to={'/product/' + product._id}>{product.name}</Link>
                </div>
                <div className="productPrice">£{product.price}</div>
                <div className="productRating">{product.rating} stars ({product.numReviews})</div>
            </div>
          </li>  
          )
        }
      </ul>
}

export default HomeScreen;
