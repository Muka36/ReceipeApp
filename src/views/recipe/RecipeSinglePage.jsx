import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { scrollToTop } from "../../utils/scrollToTop";
import { BsArrowLeft } from "react-icons/bs";
import { fetchSingleRecipe } from "../../redux/utils/recipeUtils";
import { selectSingleRecipe } from "../../redux/store/recipesSlice";
import { Loader } from "../../components/common";
import {
  AiFillFire,
  AiOutlineCheckSquare,
  AiOutlineFieldTime,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { BiDish } from "react-icons/bi";
import { GiWeightScale } from "react-icons/gi";
import "lightbox2/dist/css/lightbox.css";
import "lightbox2/dist/js/lightbox";
import {
  addToWishlist,
  removeFromWishlist,
  selectAllWishlistItems,
} from "../../redux/store/wishlistSlice";

const RecipeSinglePage = () => {
  const { id: recipeId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recipe = useSelector(selectSingleRecipe);
  // const [isWishlisted, setIsWishlisted] = useState(false);

  let tempNutrients = [];
  let tempImages = [];

  useEffect(() => scrollToTop(), []);
  useEffect(() => {
    dispatch(fetchSingleRecipe(recipeId));
  }, [recipeId, dispatch]);

  // Fetch the wishlist items from Redux state
  const allWishlistItems = useSelector(selectAllWishlistItems);

  // Check if the recipe is already in the wishlist using its ID
  const isWishlisted = allWishlistItems.some((item) => item.id === recipeId); // Check if this recipe is in the wishlist

  const toggleWishlist = () => {
    if (isWishlisted) {
      console.log("Removing from Wishlist:", recipeId);
      dispatch(removeFromWishlist(recipeId)); // Remove from wishlist
    } else {
      console.log("Adding to Wishlist:", recipe);
      dispatch(addToWishlist({ recipeId, ...recipe })); // Add to wishlist with the recipe data
    }
  };

  if (recipe) {
    Object.entries(recipe?.nutrients).map((value) => tempNutrients.push(value));
    Object.entries(recipe?.images).map((value) => tempImages.push(value));
  } else {
    return <Loader />;
  }

  return (
    <main className="recipe-single-page custom-min-h pt-[4px]">
      <section className="recipe-single">
        <div className="container recipe-single-top">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center mb-4 font-semibold back-btn"
          >
            <BsArrowLeft className="me-2" /> Go Back
          </button>

          <h3 className="recipe-single-name">{recipe?.name}</h3>
          {/* details section one */}
          <div className="recipe-group-one">
            <div className="relative recipe-left">
              <div className="relative recipe-left-img-wrapper">
                <img src={recipe?.image} alt={recipe?.name} />
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
              <a href={recipe?.source_url}>
                <span>Source:</span> {recipe?.source_url}
              </a>
            </div>

            <div className="recipe-right">
              <h4 className="recipe-right-name">{recipe?.name}</h4>
              <p className="badge-orange">{recipe?.cuisineType.join(", ")}</p>
              <div className="recipe-block general-info">
                <div className="block-list">
                  <div className="list-elem">
                    <div className="list-elem-left">
                      <AiFillFire className="me-2" />
                      <span>calories</span>
                    </div>
                    <span className="list-elem-value">
                      {recipe?.calories?.toFixed(4)}
                    </span>
                  </div>

                  <div className="list-elem">
                    <div className="list-elem-left">
                      <BiDish className="me-2" />
                      <span>dish type</span>
                    </div>
                    <span className="list-elem-value">
                      {recipe?.dishType.join(", ")}
                    </span>
                  </div>

                  <div className="list-elem">
                    <div className="list-elem-left">
                      <GiWeightScale className="me-2" />
                      <span>Weight</span>
                    </div>
                    <span className="list-elem-value">
                      {recipe?.totalWeight?.toFixed(4)}
                    </span>
                  </div>

                  <div className="list-elem">
                    <div className="list-elem-left">
                      <AiOutlineFieldTime className="me-2" />
                      <span>Time</span>
                    </div>
                    <span className="list-elem-value">{recipe?.totalTime}</span>
                  </div>
                </div>
              </div>

              <div className="recipe-block health-labels">
                <p className="block-title">Health Label:</p>
                <ul className="block-list">
                  {recipe?.healthLabels?.slice(0, 10).map((label, idx) => (
                    <li key={idx}>{label.replace("-", " ")}</li>
                  ))}
                </ul>
              </div>

              <div className="recipe-block images">
                <p className="block-title">Images (different size) :</p>
                <div className="block-list">
                  {tempImages?.map((image, idx) => (
                    <div key={idx} className="block-list-item-wrapper">
                      <a
                        href={image[1].url}
                        data-lightbox="images"
                        className="block-list-item"
                      >
                        <img src={image[1].url} alt={image[0]} />
                      </a>
                      <p className="image-item-info">
                        <span className="image-item-size">
                          {image[1].width} x {image[1].height}
                        </span>
                        <span className="image-item-name">({image[0]})</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* end of details section one */}
        </div>

        <div className="container recipe-single-bottom">
          <div className="recipe-block ingredients">
            <p className="text-lg block-title">Ingredients:</p>
            <ul className="block-list">
              {recipe?.ingredients?.map((ingredient, idx) => (
                <li key={idx} className="block-list-item">
                  <AiOutlineCheckSquare className="text-jet" size={22} />
                  <div>
                    <p className="font-semibold">{ingredient?.text}</p>
                    <div className="badges-group">
                      <span>Measure:</span> {ingredient?.quantity}
                      {ingredient?.measure} &nbsp;
                      <span>Weight:</span>
                      {ingredient?.weight.toFixed(1)} &nbsp;
                      <span>Food:</span>
                      {ingredient?.food}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="recipe-block nutrients">
            <p className="text-lg block-title">Nutrient:</p>
            <ul className="block-list">
              {tempNutrients?.map((nutrient, idx) => (
                <div key={idx} className="block-list-item">
                  <li>{nutrient[1].label}</li>
                  <li>
                    {nutrient[1].quantity.toFixed(1)} {nutrient[1].unit}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecipeSinglePage;
