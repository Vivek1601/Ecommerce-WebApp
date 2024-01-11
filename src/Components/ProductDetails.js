import useProductDetails from "../utils/useProductDetails";
import { useDispatch } from "react-redux";
import { useState,useEffect } from "react";

const ProductDetails = () => {
  const [res] = useProductDetails();
  const dispatch = useDispatch();
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [showPopupWishlist, setShowPopupWishlist] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [showPopupCart, setShowPopupCart] = useState(false);
  const [AddToCartPopup, setAddToCartPopup] = useState(false);
  const [AddToWishlistPopup, setAddToWishlistPopup] = useState(false);

    // Load wishlist and cart items from localStorage on component mount
useEffect(() => {
  const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  setIsInWishlist(wishlistItems.some(item => item.id == res?.id));
  setIsInCart(cartItems.some(item => item.id == res?.id));
}, [res]);


  // Save wishlist and cart items to localStorage whenever they change
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    if (isInCart) {
      localStorage.setItem("cart", JSON.stringify([...cartItems, res]));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify(cartItems.filter(item => item.id !== res?.id))
      );
    }
  }, [isInCart, res]);


   // Save wishlist and cart items to localStorage whenever they change
   useEffect(() => {
    const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
   

    if (isInWishlist) {
      localStorage.setItem("wishlist", JSON.stringify([...wishlistItems, res]));
    } else {
      localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlistItems.filter(item => item.id !== res?.id))
      );
    }

    
  }, [isInWishlist, res]);

  if (!res) return null;
  const rating = res?.rating;
  let isDiscount = true;
  if(res?.Discount == ""){
      isDiscount = false;
  }


  const handleCartButton = (res) => {
    if(!isInCart){
      setIsInCart(!isInCart);
      setAddToCartPopup(true);
      setTimeout(() => {
        setAddToCartPopup(false);
      }, 1000);
      }else{
        setShowPopupCart(true);
        setTimeout(() => {
          setShowPopupCart(false);
        }, 1000);
      }
  }

  const handleWishlistButton = (res) => {
    if(!isInWishlist){
    setIsInWishlist(!isInWishlist);
    setAddToWishlistPopup(true);
      setTimeout(() => {
        setAddToWishlistPopup(false);
      }, 1000);
    }else{
      setShowPopupWishlist(true);
      setTimeout(() => {
        setShowPopupWishlist(false);
      }, 1000);
    }
}



return (
    <>
    <div className="flex space-x-44">
      <div className="p-5 m-10 w-1/3 h-1/2 border-2 border-pink-500">
         <img src={res?.img} alt="img"></img>
      </div>
      <div className="p-8">
        <p className="font-bold text-3xl">{res?.name}</p>
        <div className="font-bold my-1">
        {Array.from({ length: rating }, (_, index) => (
            <span key={index} className="material-symbols-outlined">
              grade
            </span>
          ))}
          <div className="my-3 border-solid border-2 border-pink-600"></div>
        </div>
        <div>
        <div className="flex">
          <span className="font-medium py-3 text-2xl">Price</span>
          <div className="font-bold text-4xl px-3">{res?.Price}</div>
        </div>
        {isDiscount && 
        <div className="inline-block px-3 bg-red-600 rounded-sm text-white">{res?.Discount}</div>
        }
        </div>
        <div className="flex space-x-20 pt-3">
        <div className="font-semibold text-1xl py-2">Gross Weight</div>
        <div className="font-semibold text-1xl py-2">Gross Size</div>
        </div>
        <div className="flex space-x-9">
        <span className="cursor-default box-content h-30 w-32 border-4 font-bold border-red-600 p-1">{res?.weight}</span>
        <span className="cursor-default box-content h-30 w-32 border-4 font-bold border-red-600 p-1">{res?.size}</span>
        </div>
        <div className="py-8">
          <span className="font-semibold text-2xl">Specifications</span>
          <div className="flex flex-col ">
            <div>
              <span className="font-semibold">Karatage:</span>
            <span className="px-2">{res?.Karatage}</span>
               </div>
               <div>
              <span className="font-semibold">Color:</span>
            <span className="px-2">{res?.Details?.Colour}</span>
               </div>
               <div>
              <span className="font-semibold">Jewellery Type:</span>
            <span className="px-2">{res?.Details?.Jewellery_Type}</span>
               </div>
               <div>
              <span className="font-semibold">Metal:</span>
            <span className="px-2">{res?.Details?.Metal}</span>
               </div>
          </div>
        </div>
        <div className="flex space-x-36 pt-8">
          <div>
          <div className={`text-red-500 ${showPopupWishlist ? 'block' : 'hidden'}`}>
        Already in wishlist
      </div>
      <div className={`text-red-500 ${AddToWishlistPopup ? 'block' : 'hidden'}`}>
        Added To Cart
      </div>
          <button className={`border-solid border-2 rounded-md border-slate-600 px-24 py-5 cursor-pointer text-1xl bg-red-500 text-white hover:bg-red-700 hover:text-white ${
    isInWishlist ? 'bg-red-700' : ''
  }`} onClick={() => {handleWishlistButton(res)}}>Wishlist</button>
      </div>
      <div>
      <div className={`text-red-500 ${showPopupCart ? 'block' : 'hidden'}`}>
        Already in cart
      </div>
      <div className={`text-red-500 ${AddToCartPopup ? 'block' : 'hidden'}`}>
        Added To Cart
      </div>
          <button className={`border-solid border-2 rounded-md border-slate-600 px-24 py-5 cursor-pointer text-1xl bg-red-500 text-white hover:bg-red-700 hover:text-white ${
    isInCart ? 'bg-red-700' : ''
  }`} onClick={() => {handleCartButton(res)}}> Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
  
};

export default ProductDetails;