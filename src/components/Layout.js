import React, { Component, useState } from 'react'

/* IMAGES */
import boots0 from '../images/boots.jpg'
import boots1 from '../images/boot1.jpg'
import boots2 from '../images/boot2.jpg'
import boots3 from '../images/boot3.jpg'
import boots4 from '../images/boot4.jpg'
import purse1 from '../images/purse.jpg'
import purse2 from '../images/purse1.jpg'

/* COMPONENTS */
import Header from './Header'
import Shop from './Shop'
import Items from './Items'
import Nav from './Nav'
import Navigation from './Navigation'
import Banners from './Banners'
import Cart from './Cart'
import Footer from './Footer'

const main_nav = [
    {label: "New this Month"},
    {label: "Women"},
    {label: "Men"},
    {label: "Kids"},
    {label: "Footwear"},
    {label: "Leather"},
    {label: "About Us"},
    {label: "Clearance"}
]

class Layout extends Component {
    state = {
        totalItems: 0,
        totalPrice: 0,
        displayCart: false,
        showNav: false, 
        shoppingCart: {
            "Womens Port Dalhousie Boot": {
                quantity: 0,
                current: 0,
                price: 229.99,
                image: boots0
            },
            "Womens Knockout Boot":  {
                quantity: 0,
                current: 0,
                price: 189.99,
                image: boots1
            },
            "Womens Junction Boot": {
                quantity: 0,
                current: 0,
                price: 198.99,
                image: boots3
            },
            "Junction Foldover": {
                quantity: 0,
                current: 0,
                price: 169.99,
                image: purse1
            },
            "Womens Riverdale Shorty Boot": {
                quantity: 0,
                current: 0,
                price: 209.99,
                image: boots2
            },
            "Mens Beltline Boot": {
                quantity: 0,
                current: 0,
                price: 149.99,
                image: boots4
            },
            "City Mont Royal Bag": {
                quantity: 0,
                current: 0,
                price: 169.99,
                image: purse2
            }
        }
    }

    toggleCart = () => {
        this.setState({
            displayCart: !this.state.displayCart
        })
    }

    toggleNav = () => {
        this.setState({
            showNav: !this.state.showNav
        })
    }

    updateCartHandler = (type, maths, e) => {
        const prevCart = this.state.shoppingCart[type];
        const prevTotalItems = this.state.totalItems; 
        let updatedQuantity, updateTotalItems;

        if (maths === 'add') {
            updatedQuantity = parseInt(prevCart.quantity) + 1;
            updateTotalItems = prevTotalItems + 1;
          } else if (maths === 'minus') {
            updatedQuantity = parseInt(prevCart.quantity) - 1;
            updateTotalItems = prevTotalItems - 1;
          }

        const updatedItemPrice = updatedQuantity * prevCart.price;
        console.log(updatedItemPrice)
        let updatedCart = {
          ...this.state.shoppingCart
        }
        
        updatedCart[type].quantity = updatedQuantity;
        updatedCart[type].current = updatedItemPrice;
        console.log(updatedCart[type].current);
    
        let updatedItems = {
          ...this.state.totalItems
        }

        updatedItems = updateTotalItems;
    
        const updatedTotalPrice = this.calculateTotal(updatedCart);
        let updatedTotal = {
          ...this.state.totalPrice
        }
        updatedTotal = updatedTotalPrice;
    
        this.setState({ 
          shoppingCart: updatedCart,
          totalItems: updatedItems,
          totalPrice: updatedTotal
        });

      }

    calculateTotal = (item) => {
        let total = 0;
        Object.keys(item).forEach(type => {
        total += item[type].current
        })
        return parseFloat(total).toFixed(2);
    }

    handleScrollChange = () => {
        const isPassedTop = window.pageYOffset  > 800;
        if (this.state.displayCart && isPassedTop) {
          this.setState({ 
              displayCart: false
            })
        }
    }

    componentDidMount = () => {
        document.addEventListener('scroll', this.handleScrollChange, true);
      }
    
    componentWillUnmount = () => {
        document.removeEventListener('scroll', this.handleScrollChange);
    }

    render() {
    return (
        <div>
        <Nav onClick = {this.toggleCart} items = {main_nav}/>

            {this.state.showNav &&
                <nav className = 'mobile_nav'>
                    <Navigation items = {main_nav} />
                </nav>
            }

            {this.state.showNav ?
                <i class="fas fa-times" onClick = {this.toggleNav}></i> :
                <i class="fas fa-bars" id="close_nav" onClick = {this.toggleNav}></i>
            }

            {this.state.displayCart ? 
                <Cart 
                cartData={this.state.shoppingCart}
                totalPrice={this.state.totalPrice}
                updateCart={this.updateCartHandler}
                quantity = {this.state.totalItems}
                onClick = {this.toggleCart}
                /> : ''
            } 

            <Header/>
            <Shop/>     
            <Items updateCart={this.updateCartHandler}/>
            <Banners/>
            <Footer />
        </div>
    )
}
}

export default Layout;