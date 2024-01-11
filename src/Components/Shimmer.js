const Shimmer = () => {
    return (
      <div className="m-auto w-4/5">
        <div className="flex flex-wrap gap-8 justify-between ">

          {Array(10)
            .fill("")
            .map((item, index) => {
              return (
    <div className="h-80 w-72  m-8 border-solid border-2 bg-gray-400 cursor-pointer hover:scale-105"key={index}> 
        </div>
    
              );
            })}
            
</div>
</div>

      
    );
  };
  
  export default Shimmer;
  