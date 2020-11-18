import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ReactDom from 'react-dom';
import Container from './components/Container';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import img from './components/images';
import Cart from './components/Cart';
import { CartProvider } from './components/Context';
import './css/style.css';


const Body = (props) => {
    return (
        <BrowserRouter>
        <CartProvider>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Container />
                </Route>
                <Route exact path="/shop">
                    <Shop />
                </Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>
            </Switch>  
            </CartProvider> 
        </BrowserRouter>
    )
}
ReactDom.render(<Body />, document.querySelector('#root'))
