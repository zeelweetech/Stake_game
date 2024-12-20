import React, { useState } from "react";
import { MdSettings } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Generals from "./General";
import Loader from "../../component/Loader";
import Security from "./Security";
import Session from "./Session";
import Verify from "./Verify";

const Setting = () => {
  const navigate = useNavigate();
  const { section } = useParams(); // Read dynamic route parameter
  const [loading, setLoading] = useState(false);

  const getContent = (setting) => {
    switch (setting) {
      case "general":
        return <Generals />;
      case "security":
        return <Security />;
      case "session":
        return <Session/>;

      case "verify":
        return <Verify/>;

      default:
        return <Generals/>
    }
  };

  const handleSettingClick = (setting) => {
    navigate(`/setting/${setting.toLowerCase().replace(" ", "-")}`); 
  };

  return (
    <div className="bg-[#1a2c38] py-2 h-full">
      {loading ? (
        <Loader />
      ) : (
        <div className="ml-4">
          <div className="text-white flex items-center space-x-4 w-80 ml-10 mt-4">
            <MdSettings size={22} />
            <p className="text-xl py-0">Settings</p>
          </div>
          <div className="flex">
            {/* Left Sidebar (List of Settings) */}
            <div className="bg-[#0f212e] text-white rounded-lg shadow-lg p-1 w-52 h-52 flex flex-col items-start m-10 mt-5">
              <ul className="space-y-2">
                {[
                  "General",
                  "Security",
                  "Session",
                  "Verify",
                ].map((setting) => (
                  <li
                    key={setting}
                    className={`cursor-pointer hover:bg-[#2f4553] p-2 rounded ${section === setting.toLowerCase().replace(" ", "-")
                      ? "bg-[#2f4553]"
                      : ""
                      }`}
                    onClick={() => handleSettingClick(setting)}
                  >
                    {setting}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Content Area (Dynamic Content Based on Selection) */}
            <div className="ml-10 w-full bg-[#1a2c38] p-6 rounded-lg">
              {getContent(section)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Setting;
