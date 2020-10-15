import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import ProductScreen from './Screens/ProductScreen';
import SigninScreen from './Screens/SigninScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ProductsScreen from './Screens/ProductsScreen';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderScreen from './Screens/OrderScreen';
import OrdersScreen from './Screens/OrdersScreen';
import ProfileScreen from './Screens/ProfileScreen';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSignInAlt, faShoppingBasket, faTimesCircle, faUser, faCog, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from "react-redux";

library.add(fab, faSignInAlt, faShoppingBasket, faTimesCircle, faUser, faCog, faHome)

function App() {

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    }

    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    }

  return (
      <BrowserRouter>
    <>
    <div className="banner"></div>
      <header className="header">
          
          <div className="brand">
              <button onClick={openMenu}>
                  &#9776;
              </button>
              <Link to="/" ><FontAwesomeIcon icon="home"/></Link>
          </div>
          <div className="headerLinks">
            <Link to="/cart"><FontAwesomeIcon icon="shopping-basket"/></Link>
            {
                userInfo ? <Link to="/profile"><FontAwesomeIcon icon="user"/></Link> :
                    <Link to="/signin"><FontAwesomeIcon icon="sign-in-alt"/></Link>
            }
            {userInfo && userInfo.isAdmin && (
                <div className="dropdown">
                    <a href="#"><FontAwesomeIcon icon="cog"/></a>
                    <ul className="dropdown-content">
                        <li>
                            <Link to="/orders">Orders</Link> 
                        </li>
                        <li>
                            <Link to="/products">Products</Link> 
                        </li>
                    </ul>
                </div>
            )}
          </div>
      </header>
      <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebarCloseButton" onClick={closeMenu}><FontAwesomeIcon icon="times-circle"/></button>
          <ul className="categories">
              <li>
                  <Link to="/category/Bases">Bases </Link>
              </li>

              <li>
                  <Link to="/category.Dicetrays">Dice Trays</Link>
              </li>
          </ul>
      </aside>
      <main className="main">
          <div className="content">
              <Route path="/order/:id" component={OrderScreen} />
              <Route path="/orders" component={OrdersScreen} />
              <Route path="/products" component={ProductsScreen} />
              <Route path="/profile" component={ProfileScreen} />
              <Route path="/payment" component={PaymentScreen} />
              <Route path="/placeorder" component={PlaceOrderScreen} />
              <Route path="/shipping" component={ShippingScreen} />
              <Route path="/signin" component={SigninScreen} />
              <Route path="/register" component={RegisterScreen} />
              <Route path="/product/:id" component={ProductScreen} />  
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/category/:id?" component={HomeScreen} />
              <Route path="/" exact={true} component={HomeScreen} />              
          </div>
        </main>
    
    <footer className="footer">
    <p><a href="https://shanewils.github.io/newportfolio/">Website © Shane Wilson 2020 </a> </p>
    </footer>
    </>
    </BrowserRouter>
  );
}

export default App;
