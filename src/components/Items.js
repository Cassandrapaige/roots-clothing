import React, { Component } from 'react'

import {_DATA} from '../constants'
import NewItems from './NewItem'

const Items = ({updateCart}) => {
    return (
        <NewItems 
            items = { _DATA } 
            addToCart= { updateCart }/>
    )
}

export default Items