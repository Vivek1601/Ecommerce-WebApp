import ProductCard from "./ProductCard";
import useProductList from "../utils/useProductList";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { useState } from "react";
const FilterInfoGold = () => {
    const [products] =
    useProductList();

    const [currPage,setCurrPage] = useState(1);

    const onPageChange = (page) => {
      setCurrPage(page);
    };

    const filteredProducts  = products.filter((product) => product?.Details?.Metal == "Gold");

    const Page_Size = 6;
    const totalPages = Math.ceil(filteredProducts.length / Page_Size);


    return(
  <div>
  <div>
          <div className="m-auto w-4/5 flex flex-wrap gap-6 justify-between">
            {products.length == 0 ? (
              <p className="text-center w-full text-3xl">
                No products found...
              </p>
            ) : (
              filteredProducts.slice((currPage-1) * Page_Size,currPage * Page_Size).map((product) => (
                <Link key={product?.id} to={"/product/" + product?.id}>
                  <div className="hover:bg-grey-600">
                    <ProductCard
                      productPara={{
                        img: product.img,
                        name: product.name,
                        Price: product.Price,
                        Discount: product.Discount,
                      }}
                    />
                  </div>
                </Link>
              ))
          )}
          </div>
        </div>
        <Pagination  totalPages={totalPages}
            currPage={currPage}
            onPageChange={onPageChange}/>
  </div>

    )

}

export default FilterInfoGold;