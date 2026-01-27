
const Loader = () => {
  return (
    <div className="flex flex-col gap-20 w-[1440px] mx-auto">
    
      <div className="w-full h-[400px] bg-gray-300 animate-pulse rounded-lg mb-10"></div>

    
      {[1, 2, 3].map((_, idx) => (
        <div key={idx} className="flex flex-col gap-3">
          <div className="flex justify-between px-5">
            <div className="h-6 w-40 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-6 w-24 bg-gray-300 rounded animate-pulse"></div>
          </div>
          <div className="grid grid-cols-5 gap-10 px-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="w-[229px] h-[439px] bg-gray-300 rounded animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
