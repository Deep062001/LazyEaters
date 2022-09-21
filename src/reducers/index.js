import { combineReducers } from 'redux';

import foodItems from './foodItems';
import cartItems from './cartItems';
// import shopPosts from './shopPosts';

export const reducers = combineReducers({ foodItems, cartItems });
