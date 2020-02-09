import React from 'react'
import ShopItem from './ShopItem'

import Women from '../images/plaid1.jpg'
import Men from '../images/plaid2.jpg'
import Kids from '../images/plaid3.jpg'

const Shop = () => {
    return (
        <>
        <div className = 'shop'>

        <div class='tagline'>
            <h1>Made for Your <span>Everyday</span> Adventures</h1>
            <p>We're a premium outdoor lifestyle brand that embodies a comfortable cabin-meets-city style, made
                for your everyday adventures no matter where you're headed next.</p>
        </div>
            <ShopItem 
            target = 'Women' 
            image = {Women} 
            />
            <ShopItem 
            target = 'Men' 
            image = {Men} 
            />
            <ShopItem 
            target = 'Kids' 
            image = {Kids} 
            />
        </div>
        </>
    )
}

export default Shop;