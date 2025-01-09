import React, { useState, useEffect } from "react";
import { MdSettings } from "react-icons/md";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { useNavigate, useParams } from "react-router-dom";
import Generals from "./General";
import Loader from "../../component/Loader";
import Security from "./Security";
import Session from "./Session";
import Verify from "./Verify";

const Setting = () => {
  const navigate = useNavigate();
  const { section } = useParams();
  const [loading, setLoading] = useState(false);
  const [verify, setVerify] = useState(false);
  const [responsiveMobile, setResponsiveMobile] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("General");

  useEffect(() => {
    const handleResize = () => {
      setResponsiveMobile(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { label: "General", value: "General" },
    { label: "Security", value: "Security" },
    { label: "Session", value: "Session" },
    { label: "Verify", value: "Verify" }
  ];

  const getContent = (setting) => {
    switch (setting) {
      case "general":
        return <Generals />;
      case "security":
        return <Security />;
      case "session":
        return <Session />;
      default:
        return <Generals />;
    }
  };

  const handleSettingClick = (setting) => {
    if (setting === "General" || setting === "Security" || setting === "Session") {
      navigate(`/setting/${setting.toLowerCase()}`);
    } else if (setting === "Verify") {
      setVerify(true);
    }

  };

  return (
    <div className="bg-[#1a2c38] py-2 h-full">
      {loading ? (
        <Loader />
      ) : (
        <div className="ml-4">
          <div className="text-white flex items-center space-x-4 w-full xl:px-10 md:px-2 py-2">
            <MdSettings size={22} />
            <p className="text-xl py-0">Settings</p>
          </div>
          {responsiveMobile > 768 ? (
            <div className="flex">
              <div className="bg-[#0f212e] text-white rounded-lg shadow-lg h-full flex flex-col items-start m-10 mt-5">
                <ul className="space-y-2">
                  {menuItems.map((item) => (
                    <li
                      key={item.label}
                      className={`cursor-pointer hover:bg-[#2f4553] w-40 p-2 ${section === item.value
                        ? `bg-[#2f4553] border-l-2 border-sky-500 ${item.label === "General" ? "rounded-t-lg" : item.label === "Verify" && "rounded-b-lg"}`
                        : "border-l-transparent border-l-2"
                        }`}
                      onClick={() => {
                        setSelectedMenu(item.label);  
                        handleSettingClick(item.label);  
                        setIsOpen(false);  
                      }}
                      className={`p-2 text-white hover:bg-[#2f4553] cursor-pointer ${selectedMenu === item.label ? "bg-[#2f4553]" : ""
                        }`}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full bg-[#1a2c38] px-5 py-5 rounded-lg">
                {getContent(section)}
              </div>
            </div>
          ) : (
            <div className="">

              <div className="relative py-2">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="bg-[#0f212e] text-white border border-gray-500 w-28 rounded cursor-pointer flex justify-between items-center p-1"
                >
                  <span>{selectedMenu}</span>
                  {isOpen ? (
                    <ChevronUpIcon className="ml-2 h-5 w-5" />
                  ) : (
                    <ChevronDownIcon className="ml-2 h-5 w-5" />
                  )}
                </div>
              </div>
              {isOpen && (
                <div className="absolute z-10 w-28 bg-[#0f212e] border border-gray-500 rounded shadow-lg">
                  {menuItems.map((item) => (
                    <div
                      key={item.label}
                      onClick={() => {
                        setSelectedMenu(item.label);  
                        handleSettingClick(item.label);  
                        setIsOpen(false);  
                      }}
                      className={`p-2 text-white hover:bg-[#2f4553] cursor-pointer ${selectedMenu === item.label ? "bg-[#2f4553]" : ""
                        }`}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}

              <div className="w-full bg-[#1a2c38] py-1 rounded-lg">
                {getContent(section)}
              </div>
            </div>
          )}

          {verify && <div><Verify setVerify={setVerify} /></div>}
        </div>
      )}
    </div>
  );
};

export default Setting;