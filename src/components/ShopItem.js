import React from 'react'


const ShopItem = (props) => {
    return (
        <div className = 'shop_item'>
            <div className = 'shop_item_img'>
                <img src={ props.image } alt= {props.target} />
            </div>
            <button class='show_more'>Shop {props.target}</button>
        </div>        
    )
}

export default ShopItem;