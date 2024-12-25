import React, { useEffect, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";


const Session = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [responsiveMobile, setResponsiveMobile] = useState(window.innerWidth);

  const menuItems = [
    { label: "All" },
    { label: "Active" },
    { label: "Inactive" }
  ];

  useEffect(() => {
    const handleResize = () => {
      setResponsiveMobile(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = (label) => {
    setSelectedMenu(label);
    setIsOpen(false);
  };

  return (
    <div>
      {responsiveMobile > 768 ? (
        <div className="bg-[#0f212e] w-full md:w-[85%] lg:w-[90%] text-white rounded-lg p-6">        {/* <div className="mb-4"> */}
        <div className="font-bold text-gray-400 text-sm">Session Filter</div>
        <div className="relative">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#0f212e] text-white border border-gray-500 w-28 py-1 mt-1 rounded cursor-pointer flex justify-between items-center p-1"
          >
            <span>{selectedMenu}</span>
            {isOpen ? (
              <ChevronUpIcon className="ml-2 h-5 w-5" />
            ) : (
              <ChevronDownIcon className="ml-2 h-5 w-5" />
            )}
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute z-10 mt-1 w-28 bg-[#0f212e] border border-gray-500 rounded shadow-lg">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  onClick={() => handleMenuClick(item.label)}
                  className="p-2 hover:bg-[#2f4553] cursor-pointer"
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="overflow-x-auto py-2 lg:w-[99%]">
          <table className="min-w-full text-left border-collapse border border-gray-400">
            <thead>
              <tr className="bg-[#1a2c38]">
                <th className="py-4 px-4">Browser</th>
                <th className="px-4">Near</th>
                <th className="px-4">IP Address</th>
                <th className="px-4">Last Used</th>
                <th className="px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-4 px-4">Chrome (Unknown)</td>
                <td className="px-4">FR, Paris</td>
                <td className="px-4">46.250.226.163</td>
                <td className="px-4">1 hour ago</td>
                <td className="px-4">Current</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center text-center py-2 space-x-14">
          <div>Previous</div>
          <div>Next</div>
        </div>
      </div>
      ): null}

      {responsiveMobile <= 768 ? (
         <div className="bg-[#0f212e] w-full md:w-[85%] lg:w-[90%] text-white rounded-lg p-5">        {/* <div className="mb-4"> */}
         <div className="font-bold text-gray-400 text-sm">Session Filter</div>
         <div className="relative">
           <div
             onClick={() => setIsOpen(!isOpen)}
             className="bg-[#0f212e] text-white border border-gray-500 w-28 py-1 mt-1 rounded cursor-pointer flex justify-between items-center p-1"
           >
             <span>{selectedMenu}</span>
             {isOpen ? (
               <ChevronUpIcon className="ml-2 h-5 w-5" />
             ) : (
               <ChevronDownIcon className="ml-2 h-5 w-5" />
             )}
           </div>
 
           {/* Dropdown Menu */}
           {isOpen && (
             <div className="absolute z-10 mt-1 w-28 bg-[#0f212e] border border-gray-500 rounded shadow-lg">
               {menuItems.map((item) => (
                 <div
                   key={item.label}
                   onClick={() => handleMenuClick(item.label)}
                   className="p-2 hover:bg-[#2f4553] cursor-pointer"
                 >
                   {item.label}
                 </div>
               ))}
             </div>
           )}
         </div>
 
         <div className="overflow-x-auto py-2 lg:w-[99%]">
           <table className="min-w-full text-left border-collapse border border-gray-400">
             <thead>
               <tr className="bg-[#1a2c38]">
                 <th className="py-4 px-4">Browser</th>
                 <th className="px-4">Near</th>
                 <th className="px-4">IP Address</th>
                 <th className="px-4">Last Used</th>
                 <th className="px-4">Action</th>
               </tr>
             </thead>
             <tbody>
               <tr className="border-t">
                 <td className="py-4 px-4">Chrome (Unknown)</td>
                 <td className="px-4">FR, Paris</td>
                 <td className="px-4">46.250.226.163</td>
                 <td className="px-4">1 hour ago</td>
                 <td className="px-4">Current</td>
               </tr>
             </tbody>
           </table>
         </div>
         <div className="flex justify-center items-center text-center py-2 space-x-14">
           <div>Previous</div>
           <div>Next</div>
         </div>
       </div>
      ): null}
    </div>
      
    
  
  );
};

export default Session;
