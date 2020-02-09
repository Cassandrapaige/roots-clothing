import React, { Component } from 'react'

import boots0 from '../images/boots.jpg'
import boots1 from '../images/boot1.jpg'
import boots2 from '../images/boot2.jpg'
import boots3 from '../images/boot3.jpg'
import boots4 from '../images/boot4.jpg'
import purse1 from '../images/purse.jpg'
import purse2 from '../images/purse1.jpg'
import NewItems from './NewItem'

const Items = (props) => {
    const items = [
        {
            "id": 0,
            "title": "Womens Port Dalhousie Boot",
            "price": "$229.99",
            "image": boots0,
            "description": "Cras libero dui, ultrices et consectetur sit amet, pretium eget enim. Nulla quis metus lacinia, lacinia turpis in, venenatis arcu." 
        },
         {
            "id": 1,
            "title": "Womens Knockout Boot",
            "price": "$189.99",
            "image": boots1,
            "description": "Cras libero dui, ultrices et consectetur sit amet, pretium eget enim. Nulla quis metus lacinia, lacinia turpis in, venenatis arcu." 
        },
         {
            "id": 2,
            "title": "Womens Junction Boot",
            "price": "$198.99",
            "image": boots3,
            "description": "Cras libero dui, ultrices et consectetur sit amet, pretium eget enim. Nulla quis metus lacinia, lacinia turpis in, venenatis arcu." 
        },
         {
            "id": 3,
            "title": "Junction Foldover",
            "price": "$169.99",
            "image": purse1,
            "description": "Cras libero dui, ultrices et consectetur sit amet, pretium eget enim. Nulla quis metus lacinia, lacinia turpis in, venenatis arcu."
        },
         {
            "id": 4,
            "title": "Womens Riverdale Shorty Boot",
            "price": "$209.99",
            "image": boots2,
            "description": "Cras libero dui, ultrices et consectetur sit amet, pretium eget enim. Nulla quis metus lacinia, lacinia turpis in, venenatis arcu."
        },
         {
            "id": 5,
            "title": "Mens Beltline Boot",
            "price": "$149.99",
            "image": boots4,
            "description": "Cras libero dui, ultrices et consectetur sit amet, pretium eget enim. Nulla quis metus lacinia, lacinia turpis in, venenatis arcu."
        },
         {
            "id": 6,
            "title": "City Mont Royal Bag",
            "price": "$169.99",
            "image": purse2,
            "description": "Cras libero dui, ultrices et consectetur sit amet, pretium eget enim. Nulla quis metus lacinia, lacinia turpis in, venenatis arcu."
        }
    ]  
    return (
        <NewItems 
            items = { items } 
            addToCart= { props.updateCart }/>
    )
}

export default Items