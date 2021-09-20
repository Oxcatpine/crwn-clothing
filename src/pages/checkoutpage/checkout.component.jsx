import React from 'react';
import './checkout.styles.scss'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

const CheckOut = ({cartItems,total}) => (
    <div className = 'checkout-page'>
     <div className = 'checkout-header'>
         <div className ='checkout-block'>
          <span>Products</span>
         </div>
         <div className ='checkout-block'>
          <span>Description</span>
         </div>
         <div className ='checkout-block'>
          <span>Quantity</span>
         </div>
         <div className ='checkout-block'>
          <span>Price</span>
         </div>
         <div className ='checkout-block'>
          <span>remove</span>
         </div>
     </div>
      <div>{
          cartItems.map(cartItem => cartItem.name
              )
      }</div>
      <div className ='total'>Total : $ {total}</div>
      
    </div>


    
)

const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItems,
    total: selectCartTotal
  
  })

export default connect (mapStateToProps)(CheckOut); 