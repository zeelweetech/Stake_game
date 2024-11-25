// import Loader from "../component/Loader";
import { MdSettings } from "react-icons/md";
import { useState } from "react";
import Loader from "../../component/Loader";
import { NavLink, Outlet } from "react-router-dom";
import Generals from "./General";



const Setting = () => {
  const [loading, setLoading] = useState(false);
  const [selectedSetting, setSelectedSetting] = useState("General");

  const handleSettingClick = (setting) => {
    setSelectedSetting(setting);
  };

  const getContent = (setting) => {
    switch (setting) {
      case "General":
        return <div><Generals/></div>;
      case "Security":
        return <div>Security Settings</div>;
      case "Preference":
        return <div>Preference Settings</div>;
      case "API":
        return <div>API Settings</div>;
      case "Session":
        return <div>Session Settings</div>;
      case "Ignored Users":
        return <div>Ignored Users</div>;
      case "Verify":
        return <div>Verify Settings</div>;
      case "Offers":
        return <div>Offers Settings</div>;
      default:
        return <div>Select a Setting</div>;
    }
  };
  return (
    <div className="bg-[#1a2c38] py-2 h-screen">
      {loading ? (
        <Loader />
      ) : (
        <div className="ml-4">
          <div className="text-white flex item-center space-x-4 w-80 ml-10 mt-4">
            <MdSettings size={22} />
            <p className="text-xl py-0">Settings</p>
          </div>
          <div className="flex">
            {/* Left Sidebar (List of Settings) */}
            <div className="bg-[#0f212e] text-white rounded-lg shadow-lg p-1 w-60 h-96 flex flex-col items-start m-10 mt-5">
              <ul className="space-y-2">
                <li
                  className="cursor-pointer hover:bg-[#2f4553] p-2 rounded"
                  onClick={() => handleSettingClick("General")}
                >
                  General
                </li>
                <li
                  className="cursor-pointer hover:bg-[#2f4553] p-2 rounded"
                  onClick={() => handleSettingClick("Security")}
                >
                  Security
                </li>
                <li
                  className="cursor-pointer hover:bg-[#2f4553] p-2 rounded"
                  onClick={() => handleSettingClick("Preference")}
                >
                  Preference
                </li>
                <li
                  className="cursor-pointer hover:bg-[#2f4553] p-2 rounded"
                  onClick={() => handleSettingClick("API")}
                >
                  API
                </li>
                <li
                  className="cursor-pointer hover:bg-[#2f4553] p-2 rounded"
                  onClick={() => handleSettingClick("Session")}
                >
                  Session
                </li>
                <li
                  className="cursor-pointer hover:bg-[#2f4553] p-2 rounded"
                  onClick={() => handleSettingClick("Ignored Users")}
                >
                  Ignored Users
                </li>
                <li
                  className="cursor-pointer hover:bg-[#2f4553] p-2 rounded"
                  onClick={() => handleSettingClick("Verify")}
                >
                  Verify
                </li>
                <li
                  className="cursor-pointer hover:bg-[#2f4553] p-2 rounded"
                  onClick={() => handleSettingClick("Offers")}
                >
                  Offers
                </li>
              </ul>
            </div>

            {/* Right Content Area (Dynamic Content Based on Selection) */}
            <div className="ml-10 w-full bg-[#1a2c38] p-6 rounded-lg">
              {getContent(selectedSetting)}
            </div>
          </div>
         </div>
      )}
    </div>
  )
}
export default Setting