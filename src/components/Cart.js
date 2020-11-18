import React, { useContext } from 'react';
import CartItem from './CartItem';
import { CartContext, CartProvider } from './Context'

const Cart = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const items = cart.items;
    let layout = [];
    const decreaseQty = (key, price) => {
        setCart(() => {
            let temp = cart.items;
            if(temp[key][0] == 1){
                delete temp[key];
            }else{
                temp[key][0] -= 1;
            }
            return {'items': temp,
                    'length': cart.length-1,
                    'total': cart.total-price
                    }
        })
    }

    const increaseQty = (key, price) => {
        setCart(() => {
            let temp = cart.items;
            if(temp[key] != null){
                temp[key][0] += 1;
            }
            return {'items': temp,
                    'length': cart.length+1,
                    'total': cart.total+price
                    }
        })
    }

    Object.keys(items).forEach((key) => {
        let temp = items[key];
        layout[key-1] = <CartItem key={key} qty={temp[0]} name={temp[1]} 
                        author={temp[2]} price={temp[3]} image={temp[4]} 
                        increaseQty={() => increaseQty(key, temp[3])} decreaseQty={() => decreaseQty(key, temp[3])} />;
    })

    

    if (layout.length == 0){
        layout = <p style={{textAlign:"center",fontSize:"25px",fontFamily:"Montserrat"}}>Cart is Empty</p>
    }

    return (
        <div className="cart">
            <h1>Books added to cart:</h1>
            <hr></hr>
            <div className="cart-layout"> 
               {layout}
            </div>
            <div className="total">
                <p>Total: ${cart.total}</p>
                <input type="button" className="button" value="Checkout"></input>
            </div>
        </div>
    )  
}

export default Cart