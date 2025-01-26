import {
  AiOutlineArrowRight,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
  selectAllWishlistItems,
} from "../../redux/store/wishlistSlice"; // Adjusted import for the new selectors
import PropTypes from "prop-types";

const RecipeItem = ({ recipe, itemId }) => {
  const { image, name, cuisineType, mealType, id } = recipe || {};
  const dispatch = useDispatch();

  // Fetch the wishlist items from Redux state
  const allWishlistItems = useSelector(selectAllWishlistItems);

  // Check if the recipe is already in the wishlist using its ID
  const isWishlisted = allWishlistItems.some(item => item.id === id); // Check if this recipe is in the wishlist

  const toggleWishlist = () => {
    if (isWishlisted) {
      console.log("Removing from Wishlist:", id);
      dispatch(removeFromWishlist(id)); // Remove from wishlist
    } else {
      console.log("Adding to Wishlist:", recipe);
      dispatch(addToWishlist({ id, ...recipe })); // Add to wishlist with the recipe data
    }
  };

  return (
    <div className="relative recipe-list-item group">
      <div className="relative recipe-item-top">
        <LazyLoadImage
          src={image}
          className="recipe-item-img group-hover:scale-125"
          alt={name}
        />
        {/* Wishlist Icon */}
        <button
          className="absolute p-2 text-2xl text-white transition rounded-full top-2 right-2 bg-black/50 hover:bg-black"
          onClick={toggleWishlist}
          aria-label="Toggle Wishlist"
        >
          {isWishlisted ? (
            <AiFillHeart className="text-red-500" />
          ) : (
            <AiOutlineHeart />
          )}
        </button>
      </div>
      <div className="recipe-item-bottom">
        <div className="p-4">
          <h3 className="recipe-item-name">{name}</h3>
          <ul className="recipe-item-info">
            <li>
              <span>Cuisine: &nbsp;</span>
              <span>{cuisineType?.join(", ") || "Unknown"}</span>
            </li>
            <li>
              <span>{mealType?.join(", ") || "Unknown"}</span>
            </li>
          </ul>
        </div>
        <Link to={`/recipes/${id}`} className="read-btn">
          Read Full Recipe <AiOutlineArrowRight />
        </Link>
      </div>
    </div>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    cuisineType: PropTypes.array,
    mealType: PropTypes.array,
    id: PropTypes.string.isRequired,
  }),
};

export default RecipeItem;
