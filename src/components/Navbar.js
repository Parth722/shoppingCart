import React, { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import { CartContext } from './Context';

const Navbar = (props) => {
    const [cart, setCart] = useContext(CartContext);
    return (
        <div className="navbar">
            <NavLink to="/" exact activeClassName="selected" className="not-selected">
                <p className="logo">shopping<span>Cart</span></p>
            </NavLink>
            
            <ul className="nav">
                <li>
                    <NavLink to="/shop" exact activeClassName="selected" className="not-selected">
                    Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" exact>
                    Cart
                    <span className="cart_num">[{cart.length}]</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar