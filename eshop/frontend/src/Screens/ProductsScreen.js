import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts, saveProduct, deleteProduct } from '../actions/productActions';


const ProductsScreen = (props) => {
  const [modalVisable, setModalVisable] = React.useState(false);
  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [image, setImage] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [countInStock, setCountInStock] = React.useState('');
  const productList = useSelector((state) => state.productList);
  const { products, error } = productList;
  const productSave = useSelector((state) => state.productSave);
  const { loading: loadingSave, success: successSave, error: errorSave } = productSave;
  const productDelete = useSelector((state) => state.productDelete);
  const { success: successDelete, } = productDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave){
      setModalVisable(false);
    }
    dispatch(listProducts());
    return () => {
      // 
    };
  }, [successSave, successDelete, dispatch]);
  
  const openModal = (product) => {
      setModalVisable(true);
      setId(product._id);
      setName(product.name);
      setPrice(product.price);
      setDescription(product.description);
      setImage(product.image);
      setCategory(product.category);
      setCountInStock(product.countInStock);
  };

  const submitHandler = (e) => {
      e.preventDefault();
      dispatch(
        saveProduct({
          _id: id,
          name,
          price,
          image,
          category,
          countInStock,
          description,
        })
      );
  }

  const deleteHandler = (product) => {
    dispatch(deleteProduct(product._id));
  }

  return ( <div className="content content-margined">

    <div className="product-header">
      <h3>Products</h3>
      <button className="button primary" onClick={()=>openModal({})} >Create Product</button>
    </div>
    {modalVisable && (
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Create Product</h2>
            </li>
            <li>
              {loadingSave && <div>Loading...</div>}
              {errorSave && <div>{error}</div>}
            </li>
            <li>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={props.name}
                id="name"
                onChange={(e) => setName(e.target.value)}
                ></input>
            </li>
            <li>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                value={props.price}
                id="price"
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="image">Image</label>
              <input
                type="text"
                name="image"
                value={props.image}
                id="image"
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="countInStock">CountInStock</label>
              <input
                type="text"
                name="countInStock"
                value={props.countInStock}
                id="countInStock"
                onChange={(e) => setCountInStock(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="category">Category</label>
              <input
                type="text"
                name="category"
                value={props.category}
                id="category"
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                value={props.description}
                id="description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </li>
            <li>
              <button type="submit" className="button primary">
                {id ? 'Update' : 'Create'}
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setModalVisable(false)}
                className="button secondary"
              >
                Back
              </button>
            </li>
          </ul>
        </form>
      </div>
    )}
    <div className="products-list">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th> 
            <th>Price</th>
            <th>Catagory</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
              <button className="button" onClick={() => openModal(product)}>
                Edit
              </button>
              {' '}
              <button className="button" onClick={() => deleteHandler(product)}>
                Delete
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>);
}

export default ProductsScreen;


