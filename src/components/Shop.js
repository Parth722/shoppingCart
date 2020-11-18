import React from 'react';
import Card from './Card';
import Cards from './Cards';

const Shop = (props) => {
    const cardRendered = Cards.map((card) => {
        return (
            <Card 
                image={card.image}
                author={card.author} 
                name={card.name} 
                key={card.id}
                id={card.id}
                price={card.price}
            />
        )
    })
    return (
        <div className="shop">
            {cardRendered}
        </div>
    )
}

export default Shop