import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Products } from "../constant";

const useProductDetails = () => {
    const { prId } = useParams();
    const [res, setRes] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        getProductInfo();
    }, []);
  
    async function getProductInfo() {
      const data =  Products[prId-1]
    //   const json = await data.json();
    // setRes(json?.data);
      setRes(data);
      setIsLoaded(true);
    }
    return [res, isLoaded];
}

    export default useProductDetails;