import Filter from "./Filter";
import Search from "./Search";
import ProductCard from "./ProductCard";
import useProductList from "../utils/useProductList";
import { Link, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "../Components/Shimmer";
import Pagination from "./Pagination";

const Body = () => {
    const [products, actualData, crouselCards, setProducts, isLoaded] =
    useProductList();
    

    const [currPage,setCurrPage] = useState(1);

    const onPageChange = (page) => {
      setCurrPage(page);
    };

    const Page_Size = 6;
    const totalPages = Math.ceil(products.length / Page_Size);


    return(
  <>
    <Search products={products} actualData={actualData} setProducts={setProducts} />
    {!isLoaded ? (
      <Shimmer />
    ) : (
  <div>
          <div className="m-auto w-4/5 flex flex-wrap gap-6 justify-between">
            {products.length == 0 ? (
              <p className="text-center w-full text-3xl">
                No products found...
              </p>
            ) : (

              products.slice((currPage-1) * Page_Size,currPage * Page_Size).map((product) => {
                return (
                  <Link
                    key={product?.id}
                    to={"/product/" + product?.id}
                  >
                    <div className="hover:bg-grey-600">
                      < ProductCard productPara= {{img:product.img,name:product.name,Price:product.Price,Discount:product.Discount}}/>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
            <Pagination  totalPages={totalPages}
            currPage={currPage}
            onPageChange={onPageChange}/>
        </div>
          )}
  </>

    )

}

export default Body;