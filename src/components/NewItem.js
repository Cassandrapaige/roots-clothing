import React from 'react'
import Items from './Items';

const NewItems = (props) => {
    const renderItems = props.items.map(item  => {
        return(
            <div className = 'card' key= {item.id}>
                <img src={item.image} alt=""/>
                <div className="overlay">
                    <button 
                        onClick = {() => props.addToCart(item.title, 'add')}>
                        Add to cart 
                    </button>
                </div>
                <div className="info">
                    <h2>{item.title}</h2>
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


