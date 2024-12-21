import React, { useEffect, useState } from "react";

function SlideGameContent() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

   useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

  return (   
    <div className={`xl:w-[52rem] lg:w-[41rem] max-sm:mx-3 h-full text-center  flex flex-col justify-center select-none relative bg-[#0f212e] ${isMobile ? "rounded-t-xl" : "rounded-tr-xl"} `}>
     {/* <div className="flex justify-center text-white"> */}
      This is Slide game
      {/* </div> */}
        
  </div>
  );
}

export default SlideGameContent;
