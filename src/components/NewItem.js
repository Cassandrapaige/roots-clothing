import React from 'react'
import Items from './Items';

const NewItems = ({items, addToCart}) => {
    const renderItems = Object.keys(items).map((itemType, i) => {
        let item = items[itemType];
        return(
            <div className = 'card' key= {item.id}>
                <img src={item.image} alt=""/>
                <div className="overlay">
                    <button 
                        onClick = {() => addToCart(itemType, 'add')}>
                        Add to cart 
                    </button>
                </div>
                <div className="info">
                    <h2>{itemType}</h2>
                    <span>{item.price} CDN</span>
                </div>
            </div>
        )
    });
     return (
         <div className="new">
            <h2 className="title">Discover What's New</h2>
            <hr />
            <div className = 'scrolling_wrapper'>
                { renderItems }
            </div>
        </div>
     )
 }



export default NewItems


