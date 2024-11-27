import React, { useState } from "react";
import { IoClose, IoChevronBack, IoChevronDown } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import Privacy from "./Privacy";
import AntiMoneyLaunderings from "./AntiMoneyLaunderings";
import CoinMixing from "./CoinMixing";
import Providers from "./Providers";
import Sportsbook from "./Sportsbook";
import Terms from "./Terms";
import WagerRequirement from "./WagerRequirement";
import Cookies from "./Cookies";
import SelfExclusion from "./SelfExclusion";
import RacingRules from "./RacingRules";
import PokerTournamentCancellations from "./PokerTournamentCancellations";
import CardRoomRules from "./cardRoomRules";


const Policies = () => {
  const navigate = useNavigate();
  const { section } = useParams(); // Get the dynamic route parameter
  const [isOpen, setIsOpen] = useState(true);
  const links = [
    { name: "Terms of service", link: "Terms" },
    { name: "Wager Requirement", link: "WagerRequirement" },
    { name: "Anti-Money Launderings", link: "AntiMoneyLaunderings" },
    { name: "Privacy", link: "Privacy" },
    { name: "Coin Mixing", link: "coin-mixing" },
    { name: "Providers", link: "Providers" },
    { name: "Sportsbook", link: "sportsbook" },
    { name: "Cookies Policy", link: "Cookies" },
    { name: "Coin Mixing", link: "coin-mixing" },
    { name: "Self-Exclusion", link: "self-exclusion" },
    { name: "Racing Rules", link: "racing-rules" },
    { name: "Poker Card Room Rules", link: "CardRoomRules" },
    { name: "Poker Refund Policy", link: "PokerTournamentCancellations" },
  ];
  const getContent = (section) => {
    switch (section) {
      case "Privacy":
        return <Privacy />;
      case "Providers":
        return <Providers />;
      case "AntiMoneyLaunderings":
        return <AntiMoneyLaunderings />;
      case "coin-mixing":
        return <CoinMixing />;
      case "providers":
        return <Providers />;
      case "sportsbook":
        return <Sportsbook />;
      case "Cookies":
        return <Cookies />;
      case "self-exclusion":
        return <SelfExclusion />;
      case "racing-rules":
        return <RacingRules />;
      case "WagerRequirement":
        return <WagerRequirement />;
      case "PokerTournamentCancellations":
        return <PokerTournamentCancellations />;
      case "CardRoomRules":
        return <CardRoomRules />;
      case "Terms":
        return <Terms />;
      default:
        return <Terms />; // Default content
    }
  };

  const handleNavigation = (link) => {
    console.log("link ", link);

    navigate(`/Policies/${link}`); // Navigate to the dynamic route
  };
  const handleClose = () => {
    setIsOpen(false);
    navigate(-1);
  };
  return (
    <div className="min-h-screen bg-[#1a2c38] text-gray-300 rounded-lg">
      {/* Header - Responsive */}
      <div className="flex items-center justify-between p-2 lg:p-6">
        <div className="flex items-center gap-4">
          {/* Back button - Only visible on mobile/tablet */}

          <h1 className="text-xl font-semibold text-white">Policies</h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar - Full width on mobile, fixed width on desktop */}
        <div className="w-full lg:w-64 bg-[#1A2C38] lg:min-h-screen p-4 rounded-lg">
          {/* Dropdown for mobile view */}
          <div className="lg:hidden">
            <div className="flex items-center text-gray-300 rounded-lg p-2">
              <div className="bg-[#0F212E] rounded-lg">
                <button
                  onClick={() => navigate(-1)}
                  className="w-full text-slate-400 hover:text-white p-4 mr-5"
                >
                  <IoChevronBack size={20} />
                </button>
              </div>


              <div className="bg-[#0F212E] rounded-lg p-2 ml-2">
                <select
                  onChange={(e) => handleNavigation(e.target.value)}
                  className="w-full bg-transparent appearance-none cursor-pointer pr-8 py-1 text-white
    [&>option]:bg-white [&>option]:text-black focus:outline-none focus:ring-0 focus:border-none"
                >
                  {links.map((item) => (
                    <option
                      key={item.name}
                      value={item.link}
                      className="text-black bg-white hover:bg-gray-100 p-6 m-6"
                      style={{
                        backgroundColor: 'white',
                        color: 'black',
                        padding: '8px 16px',
                      }}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
                {/* <div className="absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                  <IoChevronDown size={16} />
                </div> */}
              </div>
            </div>
          </div>

          <nav className="hidden lg:block space-y-2 bg-[#0F212E] rounded-lg mt-3">
            {links.map((item) => (
              <div
                key={item.name}
                className={`block px-4 py-2 text-gray-300 hover:bg-[#2a3947] hover:text-white rounded-md 
                  transition-colors cursor-pointer ${section === item.link ? 'bg-[#2a3947] text-white' : ''
                  }`}
                onClick={() => handleNavigation(item.link)}
              >
                {item.name}
              </div>
            ))}
          </nav>
        </div>
        <div className="flex-1 p-4 lg:p-8 bg-[#1a2c38]">
          <div className="max-w-6xl mx-auto">
         

            {/* Main Content */}
            <div className="bg-[#0F212E] rounded-lg p-4 lg:p-6">
              {getContent(section)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
