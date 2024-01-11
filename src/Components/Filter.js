import { Link } from "react-router-dom";
import {Products} from "../constant";
import ProductCard from "./ProductCard";

const Filter = () => {

    // const filterProducts = Products.filter(product => product?.Details?.Metal.toLowerCase().includes(searchText?.toLowerCase()));
    return (
        <div class="flex justify-evenly">
  <div className= "hover:bg-pink-200 rounded-md p-2 cursor-pointer">
    <Link to="/">ALL JEWELLERY</Link>
    </div>
  <div class="hover:bg-pink-200 rounded-md p-2 cursor-pointer">
    <Link to="/filter/gold">Gold</Link>
  </div>
  <div class="hover:bg-pink-200 rounded-md p-2 cursor-pointer">
    <Link to="/filter/silver">Silver</Link>
  </div>
</div>
    )
}

export default Filter;