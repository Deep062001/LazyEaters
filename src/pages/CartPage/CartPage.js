import React from "react";
import { useSelector } from "react-redux";
import FoodCard from "../../components/FoodCard/FoodCard";
import "./CartPage.scss";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cartItems);
  console.log(cartItems);
  return (
    <div className="cart-div">
      <h3>Cart</h3>
      <div>
        {cartItems.map((item) => {
          return (
            <FoodCard
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              tags={item.tags}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CartPage;
