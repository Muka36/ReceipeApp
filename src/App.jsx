import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  ViewHome,
  ViewRecipeSingle,
  ViewRecipeList,
  ViewTypeList,
  ViewError, 
  ViewSearchResult,
} from "./views";
import BaseLayout from "./layouts/BaseLayout";
import WishlistDisplay from "./views/wishlistDisplay/WishlistDisplay";

// array of routes should be passed here
const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ViewError />,
    children: [
      {
        path: "/",
        element: <ViewHome />,
      },
      {
        path: "recipes/:typeOf/:typeName",
        element: <ViewRecipeList />,
      },
      {
        path: "recipes/:id",
        element: <ViewRecipeSingle />,
      },
      {
        path: "recipes/search",
        element: <ViewSearchResult />,
      },
      {
        path: "types/:typeId",
        element: <ViewTypeList />,
      },
      {
        path: "/wishlist",
        element: <WishlistDisplay />
      },
      {
        path: "*",
        element: <ViewError />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
