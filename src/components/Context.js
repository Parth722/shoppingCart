import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState({
        'items': {},
        'length': 0,
        'total': 0,
    });
    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}

