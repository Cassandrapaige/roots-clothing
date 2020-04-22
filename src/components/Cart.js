import React from 'react';


const Cart = (props) => {
    let shoppingCart = [];
    let isEmpty = true;
  
    Object.keys(props.cartData).forEach((itemType, i) => {
      let item = props.cartData[itemType];
      if (item.quantity > 0) {
        shoppingCart.push(
          <div className = 'cart_item' key= {i}>
            <img src = { item.image } alt={ itemType }></img>
            <div className="info">
                <p className = 'cart_item_name'> {item.quantity} <span>
                  x</span> { itemType } </p>
                  <div className="info_details">
                      <p className = 'cart_item_price'> ${ item.current } </p>
                      <div className="control_btns">
                          <button 
                            onClick={() => props.updateCart(itemType, 'add')}><i class="fas fa-plus"></i>
                          </button>
                          <button 
                            onClick={() => props.updateCart(itemType, 'minus')}><i class="fas fa-minus"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
        )
      }
    })
    if (shoppingCart.length > 0) {
      isEmpty = false;
    } else if (isEmpty === true) {
      shoppingCart = (
        <p>Looks like you better start shopping.</p>
      )
    }
  
    return ( 
    
        <section className = 'shoppingCart'>

            { props.totalPrice > 200 &&
            <div className = 'promo'>
                <h4>You qualify for free shipping <i class="fas fa-shipping-fast"></i></h4>
                <p>Available on all orders over $200</p>
            </div> }

            <h1 className = 'title'> My Cart <span> { props.quantity } </span></h1>

          <div>
            { shoppingCart }
          </div>

          <div>
            <p className = 'cart_total'>Subtotal 
              <span class = "total_items"> -{ props.quantity } item{ props.quantity !== 1 ? 's'  : '' }</span>
              <span>${ props.totalPrice } CAD</span></p>
          </div>
        </section>
    );
  }
  
  export default Cart;