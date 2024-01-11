const ProductCard = ({
    productPara
}) => {
  return (

    <div className="h-auto w-72 m-8 border-solid border-2 border-pink-100 cursor-pointer hover:scale-105">
            <div className="flex">
        <img className="w-64"src={productPara.img} alt="product_img"></img>
        </div>
        <p className="p-1 font-bold text-ellipsis overflow-hidden">{productPara.name}</p>
        <div className="flex justify-between">
        <p className="p-1 font-bold">{productPara.Price}</p>
        <span className="p-1 text-red-700">{productPara.Discount}</span>
        </div>
        </div>
  );
};

export default ProductCard;