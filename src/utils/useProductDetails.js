import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Products } from "../constant";

const useProductDetails = () => {
    const { prId } = useParams();
    const [res, setRes] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
      const getProductInfo = async () => {
        const data = Products[prId - 1];
        // const json = await data.json();
        // setRes(json?.data);
        setRes(data);
        setIsLoaded(true);
      };
  
      // Include getProductInfo in the dependency array
      getProductInfo();
  
    }, [prId]); // <-- Include prId as a dependency
  
    return [res, isLoaded];
  };
  

    export default useProductDetails;