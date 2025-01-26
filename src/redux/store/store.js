import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./recipesSlice";
import typesReducer from "./typesSlice";
import wishlistReducer from "./wishlistSlice"; // Correct import

const rootReducer = {
  recipes: recipesReducer,
  types: typesReducer,
  wishlist: wishlistReducer, // Correct key name

};

const store = configureStore({
  reducer: rootReducer,
});

// Subscribe to store updates to save wishlist in localStorage
store.subscribe(() => {
  const state = store.getState();
  const wishlistItems = state.wishlist.wishlist; // Correct state path (wishlist is an array now)
  localStorage.setItem("wishlist", JSON.stringify(wishlistItems)); // Save to localStorage
});

export default store;
