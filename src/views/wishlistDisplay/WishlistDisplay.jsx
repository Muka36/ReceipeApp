import React from "react";
import { useSelector } from "react-redux";
import { selectAllWishlistItems } from "../../redux/store/wishlistSlice";
import RecipeItem from "../../components/recipe/RecipeItem"; // Import the RecipeItem component
import PropTypes from "prop-types";

const WishlistDisplay = () => {
  // Fetching all wishlist items from the Redux store
  const wishlistItems = useSelector(selectAllWishlistItems);

  if (wishlistItems.length === 0) {
    return (
      <div className="wishlist-empty">
        <h2>Your wishlist is empty.</h2>
      </div>
    );
  }

  return (
    <div className="container title wishlist-display">
      <h2 className="sub-title">Your Wishlist</h2>
      <div className="recipe-list">
        {wishlistItems.map((item) => (
          <RecipeItem key={item.id} recipe={item}  itemId ={item.id}/> // Use RecipeItem to display each wishlisted recipe
        ))}
      </div>
    </div>
  );
};

WishlistDisplay.propTypes = {
  wishlistItems: PropTypes.array.isRequired,
};

export default WishlistDisplay;
