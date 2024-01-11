import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import {clearCart,setCart} from "../utils/cartSlice";
import { useEffect } from "react";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  useEffect(() => {
    // Initialize cart state from local storage when the component mounts
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch(setCart(storedCart));
  }, [dispatch]);

  const clearAllItems = () => {
    dispatch(clearCart());
}

let value = 0;
let deliveryCharge = 0;
cartItems.map((item) => {
  const stringWithoutCurrency = item.Price.replace(/[^0-9]/g, '');
  const integerValue = parseInt(stringWithoutCurrency, 10);
   value += integerValue;
   return null;
})
  return(
    <>
   <div className="flex justify-center">
    <button className="bg-red-500 text-white p-2 rounded-md h-10 " onClick={()=>clearAllItems()}>Clear Cart</button>
    </div>
    <div className="flex flex-col min-h-screen">
      <div className="relative left-10 flex-grow">
   {cartItems.map((item) => (
      <CartItem key= {item.id} productPara= {{img:item.img,name:item.name,Price:item.Price,Discount:item.Discount}} />
   ))
}
</div>
<div className="absolute bottom-0 right-20 box-border bg-slate-200 h-96 w-96 p-4 border-4">
     <p className="text-red-900 font-bold pb-3">Order Summary</p>
     <table class="table-auto">
  <tbody>
    <tr>
    <td className="p-3 font-bold">Total Items</td>
    <td className="pl-16 font-bold">{cartItems.length}</td>
    </tr>
    <tr>
    <td className="p-3 font-bold">Sub Total</td>
    <td className="pl-16 font-bold">{value}</td>
    </tr>

    <tr>
      <td className="p-3 font-bold">Delivery Charge</td>
      <td className="pl-16 font-bold">{deliveryCharge}</td>
      </tr>
      <tr>
      <td className="p-10 font-bold">Total</td>
      <td className="pl-16 font-bold">{value + deliveryCharge}</td>
      </tr>
      <tr>
        <td className="cursor-pointer relative left-32 flex justify-center p-2 bg-red-500 text-white rounded-md">Pay Online</td>
      </tr>
  </tbody>
  </table>
</div>
</div>
  </>
  )

}

export default Cart;