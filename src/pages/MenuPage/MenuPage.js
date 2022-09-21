import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoodItems } from "../../actions/foodItems";
import FoodCard from "../../components/FoodCard/FoodCard";
import { toast } from 'react-toastify';
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
        toast.success("Done");
      })
      .catch((error) => {
        console.log(error?.response?.data?.message || error.message);
        toast.error( error?.response?.data?.message || error.message);
      })
      .finally(() => {
        toast.success("Done2");
        setLoading(false);
      });
  }, [dispatch]);
  const foodItems = useSelector((state) => state.foodItems);
  console.log(foodItems);
  return (
    <div className="menu-div">
      {loading ? (
        <LoadingPage />
      ) : (
        foodItems.map((item) => {
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
        })
        // <FoodCard
        //       key={"add"}
        //       id={"adds"}
        //       name={"Nachos"}
        //       image={require("../../assets/nachos.png")}
        //       tags={"Snacks"}
        //       price={"170"}
        //     />
      )}
    </div>
  );
};

export default MenuPage;
