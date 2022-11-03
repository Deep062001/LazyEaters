import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoodItems } from "../../actions/foodItems";
import FoodCard from "../../components/FoodCard/FoodCard";
import { toast } from "react-toastify";
import LoadingPage from "../LoadingPage/LoadingPage";
import "./MenuPage.scss";

const MenuPage = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const category = ["Snacks", "Desserts", "Main Course"];

  useEffect(() => {
    setLoading(true);
    dispatch(getFoodItems())
      .then((data) => {
        console.log(data);
        toast.success("Done");
      })
      .catch((error) => {
        console.log(error?.response?.data?.message || error.message);
        toast.error(error?.response?.data?.message || error.message);
      })
      .finally(() => {
        toast.success("Done2");
        setLoading(false);
      });
  }, [dispatch]);
  const foodItems = useSelector((state) => state.foodItems);
  console.log(foodItems);

  function handleChange(e) {
    const { value } = e.target;
    setSearch(value);
  }

  function handleSubmit(e) {
    e.stopPropogation();
  }
  return (
    <div className="menu-div">
      {loading ? (
        <LoadingPage />
      ) : search === "" ? (
        <div className="category-div" style={{width: "100vw"}}>
          <div className="search-div">
            <form onSubmit={handleSubmit}>
              <input className="search-input" onChange={handleChange} />
              <button type="submit">Search</button>
            </form>
          </div>
          <p className="p-heading">{category[0]}</p>
          <div className="items-div">
            {foodItems
              .filter((item) => {
                return item.tags[0] === category[0];
              })
              .map((item) => {
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

          <p className="p-heading">{category[1]}</p>
          <div className="items-div">
            {foodItems
              .filter((item) => {
                return item.tags[0] === category[1];
              })
              .map((item) => {
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

          <p className="p-heading">{category[2]}</p>
          <div className="items-div">
            {foodItems
              .filter((item) => {
                return item.tags[0] === category[2];
              })
              .map((item) => {
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
      ) : (
        <div style={{width: "100vw"}}>
        <div className="search-div">
            <form onSubmit={handleSubmit}>
              <input className="search-input" onChange={handleChange} />
              <button type="submit">Search</button>
            </form>
          </div>
        <div className="items-div">
          {foodItems
            .filter((item) => {
              return item.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((item) => {
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
      )}
    </div>
  );
};

export default MenuPage;
