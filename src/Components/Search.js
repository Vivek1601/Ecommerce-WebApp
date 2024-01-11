import { useState,useEffect } from "react";
import {filterProduct} from "../utils/helper";

const Search = ({products,actualData,setProducts}) => {
    const [searchText,setSearchText] = useState("");

    const handleSearch = () => {
      const data = filterProduct(searchText, actualData);
      setProducts(data);
    };
  
    const handleClearSearch = () => {
      setSearchText("");
      setProducts(actualData);
    };

    useEffect(() => {
      // Use a function to check if searchText is empty and update products accordingly
      const handleSearch = () => {
        const data = searchText ? filterProduct(searchText, actualData) : actualData;
        setProducts(data);
      };
  
      // Trigger search whenever searchText changes
      handleSearch();
    }, [searchText, actualData, setProducts]);
  

        return (
            <div className="w-96 m-auto  flex justify-between items-center">
              {/* <p className="text-2xl">{products.length} products</p> */}
              <form
                className="w-96 px-3 text-xl text-right"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  className="p-2 border-2 w-2/3 border-gray-500 outline-none  border-r-0 rounded-l-lg"
                  placeholder="Search For Gold,Silver Jewells & more..."
                  autoFocus={true}
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                />
                <button
                  className="rounded-r-lg px-3 py-2 border-2  border-gray-500 bg-gray-700 text-white hover:bg-white hover:text-black "
                  onClick={searchText ? handleSearch : handleClearSearch}
                >
                  Search
                </button>
              </form>
            </div>
          );

        };

        
        export default Search;