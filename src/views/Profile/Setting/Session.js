import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";


const Session = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const [isOpen, setIsOpen] = useState(false); 

  const menuItems = [
    { label: "All" },
    { label: "Active" },
    { label: "Inactive" }
  ];

  const handleMenuClick = (label) => {
    setSelectedMenu(label); 
    setIsOpen(false); 
  };

  return (
    <>
      <div className="bg-[#0f212e] text-white rounded-lg p-7">
      <div className="mb-4">
        <div className="font-bold text-xl">Session Filter</div>
        <div className="relative">
          <div
            onClick={() => setIsOpen(!isOpen)} // Toggle dropdown visibility
            className="bg-[#0f212e] text-white border border-gray-500 w-32 py-1 mt-1 rounded cursor-pointer flex justify-between items-center px-2"
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
            <div className="absolute z-10 mt-1 w-32 bg-[#0f212e] border border-gray-500 rounded shadow-lg">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  onClick={() => handleMenuClick(item.label)} // Handle menu item click
                  className="py-2 px-4 hover:bg-[#2f4553] cursor-pointer"
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

          <div className="p-6">
            <table>
              <tr>
                <th className="py-4">Browser</th>
                <th>Near</th>
                <th>IP Address</th>
                <th>Last Used</th>
                <th>Action</th>
              </tr>
              <tr>
                <td className="py-4">Chrome(Unknown)</td>
                <td>FR,Paris</td>
                <td>46.250.226.163</td>
                <td>1 hour ago</td>
                <td>Current</td>
              </tr>
            </table>
          </div>
          <div className="flex justify-center items-center text-center space-x-14">
            <div>Previous</div>
            <div>Next</div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Session;
