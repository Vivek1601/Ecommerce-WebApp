import { useDispatch, useSelector } from "react-redux";
import WishlistItem from "./WishlistItem";
import { setItemW } from "../utils/wishlistSlice";
import { useEffect } from "react";


const Wishlist = () => {
  const wishlistItems = useSelector((store) => store.wishlist.items);

  const dispatch = useDispatch();

useEffect(() => {
  // Initialize cart state from local storage when the component mounts
  const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  dispatch(setItemW(storedWishlist));
}, [dispatch]);

  return(
    <>
    <div className="m-auto w-4/5 flex flex-wrap gap-6 justify-evenly">
   {wishlistItems.map((item) => (
      <WishlistItem key= {item.id} productPara= {{img:item.img,name:item.name,Price:item.Price,Discount:item.Discount,id:item.id}} />
   ))
   
}
</div>
  </>
  )

}

export default Wishlist;