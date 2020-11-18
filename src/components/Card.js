import React, { useContext } from 'react';
import { CartContext } from './Context'

const Card = (props) => {
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        setCart(() => {
            let temp = cart.items;
            if(temp[props.id] != null){
                temp[props.id][0] += 1;
            }else{
                temp[props.id] = [1, props.name, props.author, props.price, props.image];
            }
            return {'items': temp,
                    'length': cart.length+1,
                    'total': cart.total+props.price
                    }
        })
    }
    return (
        <div className="card">
            <img 
                src={props.image} 
                alt={props.name}
                className="card-image"
            />
            <div className="card-data">
                <p style={{fontWeight:'700', fontSize:'18px'}}>{props.name}</p>
                <hr />
                <p><span style={{fontWeight:'700'}}>Author:</span> {props.author}</p>
                <p><span style={{fontWeight:'700'}}>Price: $</span> {props.price}</p>
            </div>
            <div className="card-add-item">
                <p>Add To Cart.</p>
                <button className="btn" onClick={addToCart}>+</button>
            </div>
        </div>
    )
}

export default Card