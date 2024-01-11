import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error";
import Body from "../Components//Body";
import Cart from "../Components/Cart";
import AppLayout from "../Components/AppLayout";
import Wishlist from "../Components/Wishlist";
import ProductDetails from "../Components/ProductDetails";
import Account from "../Components/Account";
import {lazy,Suspense } from "react";
import Shimmer from "../Components/Shimmer";


const FilterInfoGold = lazy(() => import("../Components/FilterInfoGold"));
const FilterInfoSilver = lazy(() => import("../Components/FilterInfoSilver"));

const useRoute = () => {

  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/Account",
          element: <Account/>,
        },
        {
          path:"/filter/gold",
          element: (
            <Suspense fallback={<Shimmer />}>
              <FilterInfoGold/>
            </Suspense>
          ),
        },
        {
          path:"/filter/silver",
          element:(
            <Suspense fallback={<Shimmer />}>
              <FilterInfoSilver/>
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
            path: "/wishlist",
            element: <Wishlist />,
          },
        {
          path: "/product/:prId",
          element: <ProductDetails />,
        },
      ],
    },
  ]);
  return appRoute;
};

export default useRoute;