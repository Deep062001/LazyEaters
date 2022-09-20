import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoodItems } from "../../actions/foodItems";
import LoadingPage from "../LoadingPage/LoadingPage";
import "./MenuPage.scss";

const MenuPage = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getFoodItems())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);
  const foodItems = useSelector((state) => state.foodItems);
  console.log(foodItems);

  return <div>{loading ? <LoadingPage/> : <p>Hello</p>}</div>;
};

export default MenuPage;
