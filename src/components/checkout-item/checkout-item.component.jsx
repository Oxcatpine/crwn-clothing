import React from 'react';
import './checkout-item.styles.scss';
import { clearItem,reduceItemByArrow,addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CheckoutItem = ( {cartItem , clearItem,reduceItem,addItem}) => {

    const {name,imageUrl,price,quantity} = cartItem
    return (
    <div className = 'checkout-item'>
      
      <div className= 'image-container'>
          <img src ={imageUrl} alt='item' />
      </div>
     <span className ='name'>{name}</span>
     <span className ='quantity'>
      <div className ='arrow' onClick = {() => reduceItem (cartItem)} > &#10094;</div>
         <span className ='value'>{quantity}</span>
      <div className ='arrow' onClick = {() => addItem (cartItem)}> &#10095;</div>
     </span>
     <span className ='price' >{price}</span>
     <div className ='delete-button' onClick = {() => clearItem (cartItem)}> &#x2716;</div>
         
    </div>

)}


const mapDispatchToProps = dispatch =>({
    clearItem : (item)=> dispatch( clearItem(item) ),
    addItem : (item)=> dispatch( addItem(item) ),
    reduceItem : (item)=> dispatch( reduceItemByArrow(item) ),

  });

export default connect (null,mapDispatchToProps)(CheckoutItem); 