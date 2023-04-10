import React, {useContext} from 'react';
import { MenuContext } from '../../context/menu-context';

export const CartItem = (props) => {
const {id, productName, price, productImage} = props.data;
const {cartItems, addToCart, removeFromCart} = useContext(MenuContext);
  return ( 
  <div className='cartItem'> 
  <div className='cartItemImage' style={{ backgroundImage: `url(${productImage})` }}> </div>
 
  <h1> {productName}</h1>
  <p> {price}rsd</p>
  <div className='countHandler'>
    <button onClick={() => removeFromCart(id)}> - </button>
    <input value={cartItems[id]} />
    <button onClick={() => addToCart(id)}> + </button>
  </div>
  </div>

  );
};

