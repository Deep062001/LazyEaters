import React from 'react'
import { useSelector } from 'react-redux';
import './CartPage.scss';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cartItems);
  console.log(cartItems);
  return (
    <div>CartPage</div>
  )
}

export default CartPage