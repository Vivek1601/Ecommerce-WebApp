import { useState, useEffect } from "react";
import { Products } from "../constant";

const useProductList = () => {
  const [products, setProducts] = useState([]);
  const [actualData, setActualData] = useState([]);
  // const [crouselCards, setCrouselCards] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    setIsLoaded(false);
        setProducts(Products);
      // setCrouselCards(Products);
      setIsLoaded(true);
      setActualData(Products);
      // console.log(products);
  }, []);



  return [products, actualData, setProducts,isLoaded];
};
export default useProductList;