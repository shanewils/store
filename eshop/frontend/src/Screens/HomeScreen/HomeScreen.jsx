import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomeScreen = (props) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get("/api/products");
      setProducts(data);
    }
    fetchData();
    return () => {
      //
    };
  }, [])

  return <ul className="products">
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
