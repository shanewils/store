import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrders, deleteOrder } from '../actions/orderActions';
import { Link } from 'react-router-dom';

const OrdersScreen = (props) => {
  const orderList = useSelector((state) => state.orderList);
  const { loading, orders } = orderList;

  const orderDelete = useSelector((state) => state.orderDelete);
  const {  success: successDelete, } = orderDelete;
  const dispatch = useDispatch();

  useEffect(() => {
   
    dispatch(listOrders());
    return () => {
      // 
    };
  }, [successDelete, dispatch]);

  const deleteHandler = (order) => {
    dispatch(deleteOrder(order._id));
  }

  return loading? <div>Loading...</div> : 
  <div className="content content-margined">

    <div className="order-header">
      <h3>Orders</h3>
    </div>
    
    <div className="orders-list">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>DATE</th> 
            <th>TOTAL</th>
            <th>USER</th>
            <th>PAID</th>
            <th>PAID AT</th>
            <th>DELIVERED</th>
            <th>DELIVERED AT</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.createdAt}</td>
              <td>{order.totalPrice}</td>
              <td>{order.user.name}</td>
              <td>{order.isPaid.toString()}</td>
              <td>{order.paidAt}</td>
              <td>{order.isDelivered.toString()}</td>
              <td>{order.deliveredAt}</td>
              <td>
                <Link to={"/order/" + order._id} className="button">Details</Link>
                {' '}
                <button className="button-secondary" onClick={() => deleteHandler(order)}>
                Delete
              </button> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>;
}

export default OrdersScreen;


