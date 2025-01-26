import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";

// Retrieve saved wishlist from localStorage
const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
console.log("Saved Wishlist from LocalStorage:", savedWishlist);

const initialState = {
  wishlist: savedWishlist,
  error: null,
  status: STATUS.IDLE,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
      console.log("Added to Wishlist:", state.wishlist);

      // Save updated state to localStorage
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
      console.log("Removed from Wishlist:", state.wishlist);

      // Save updated state to localStorage
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    clearWishlist: (state) => {
      state.wishlist = [];
      console.log("Cleared Wishlist:", state.wishlist);

      // Save updated state to localStorage
      localStorage.setItem("wishlist", JSON.stringify([]));
    },
  },
});

// Export actions
export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;

// Export selectors
export const selectAllWishlistItems = (state) => state.wishlist.wishlist;
export const getWishlistStatus = (state) => state.wishlist.status;
export const getWishlistError = (state) => state.wishlist.error;

export default wishlistSlice.reducer;
