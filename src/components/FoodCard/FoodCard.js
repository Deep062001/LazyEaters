import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../actions/cartItems";
import "./FoodCard.scss";

const FoodCard = ({ id, name, image, tags, price }) => {
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    setQuantity(0);
  }, []);

  function increaseQty() {
    setQuantity((prev) => {
      return prev + 1;
    });

    dispatch(addCartItem({ id:id, name:name, image: image, tags:tags, price:price }))

  }

  function decreaseQty() {
    setQuantity((prev) => {
      return prev - 1;
    });
  }

  return (
    <div className="outer-card">
      <img src={image} alt={name} />
      <div className="details-div">
        <div className="description-div">
          <p>{name}</p>
          <p>Rs. {price}</p>
        </div>
        <div className="qty-div">
          {quantity === 0 ? (
            <button className="add-cart-btn" onClick={increaseQty}>
              Add to Cart
            </button>
          ) : (
            <div className="btn-flex">
              <button className="btn-qty" onClick={decreaseQty}>
                -
              </button>
              <p>{quantity}</p>
              <button className="btn-qty" onClick={increaseQty}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
