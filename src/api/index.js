import axios from "axios";

// for foods
const url = "http://localhost:5000/foodItems";
export const fetchFoodItems = () => axios.get(url);