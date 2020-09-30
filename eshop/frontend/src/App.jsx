import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSignInAlt, faShoppingBasket, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faSignInAlt, faShoppingBasket, faTimesCircle)

function App() {

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
              <Link to="/" >Home</Link>
          </div>
          <div className="headerLinks">
              <a href="cart.html"><FontAwesomeIcon icon="shopping-basket"/></a>
              <a href="signin.html"><FontAwesomeIcon icon="sign-in-alt"/></a>
          </div>
      </header>
      <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebarCloseButton" onClick={closeMenu}><FontAwesomeIcon icon="times-circle"/></button>
          <ul>
              <li>
                  <a href="index.html">Bases</a>
              </li>
              <li>
                  <a href="index.html">Dice Trays</a>
              </li>
          </ul>
      </aside>
      <main className="main">
          <div className="content">
              <Route path="/product/:id" component={ProductScreen} />  
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
