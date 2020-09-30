import React from "react";
import data from "../../data/data";
import { Link } from "react-router-dom";

const ProductScreen = (props) => {
  console.log(props.match.params.id);
  const product = data.products.find(x => x._id === props.match.params.id);
  return <div className="details">
    <div className="back-to-result">
      <Link to="/">Back to results</Link>
    </div>
  
      <div className="details-image">
        <img src={product.image} alt="{product.name}"></img>
      </div>
      <div className="details-info">
        <ul>
          <li>
            <h4>{product.name}</h4>
          </li>
          <li>
            {product.rating} Stars ({product.numReviews} Reviews)
          </li>
          <li>
            <b>Price: £{product.price}</b>
          </li>
          <li>
            Description:
            <div>
              {product.description}
            </div>
          </li>
        </ul>
      </div>
      <div className="details-action">
        <ul>
          <li>
            Price: £{product.price}
          </li>
          <li>
            Status: {product.status}
          </li>
          <li>
            Qty: <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </li>
          <li>
            <button className="button">Add to Cart</button>
          </li>
        </ul>
      </div>
  </div>
}

export default ProductScreen;
