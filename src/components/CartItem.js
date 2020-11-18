import React, { useContext } from 'react';

const CartItem = (props) => {
    
    return (
        <div className="cart-item">
            <img className="img" src={props.image} height="300"></img>
            <div className="item-data">
                <p className="name">{props.name}</p>
                <p className="author">{props.author}</p>
                <p className="price">${props.price}</p>
                <div className="qty-btn">
                    <div className="btns">
                    <button className="dec" onClick={props.decreaseQty}>-</button>
                        <span className="val">{props.qty}</span>
                    <button className="inc" onClick={props.increaseQty}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem