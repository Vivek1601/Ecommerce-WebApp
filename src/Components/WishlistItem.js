import { removeItemW } from "../utils/wishlistSlice";
import { useDispatch } from "react-redux";
const WishlistItem = ({
    productPara
}) => {
    const dispatch = useDispatch();
  const removeItems = (id) => {
    dispatch(removeItemW({itemId : id}));
}
  return (
    <div className="h-auto w-72 m-8 border-solid border-2 border-pink-100 cursor-pointer hover:scale-105">
            <div className="flex">
        <img className="w-64"src={productPara.img} alt="img"></img>
        </div>
        <p className="p-1 font-bold text-ellipsis overflow-hidden">{productPara.name}</p>
        <div className="flex justify-between p-1">
        <button className="bg-pink-200 rounded-md p-1" onClick={()=>removeItems(productPara.id)}>Remove item</button>
        <p className="p-1 font-bold">{productPara.Price}</p>
        <span className="p-1 text-red-700">{productPara.Discount}</span>
        </div>
        </div>
  );
};

export default WishlistItem;