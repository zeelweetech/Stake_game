// import React, { useEffect, useState } from "react";
// import Loader from "../../component/Loader";
// import SlideBar from "./SlideBar";
// import StackOriginals from "./StackOriginals";
// import SearchIcon from "@mui/icons-material/Search";
// import { TbCherryFilled } from "react-icons/tb";
// import { BsFire } from "react-icons/bs";
// import Filter7Icon from "@mui/icons-material/Filter7";
// import { FaGift } from "react-icons/fa6";
// import { IoIosRocket } from "react-icons/io";
// import { BsBookmarkStarFill } from "react-icons/bs";
// import InboxIcon from "@mui/icons-material/Inbox";
// import Slots from "./Slots";
// import LiveCasino from "./LiveCasino";
// import GameShows from "./GameShows";
// import Exclusives from "./Exclusives";
// import { getAllGames } from "../../../services/GameServices";

// function CasinoHomePage() {
//   const [stackMenu, setStackMenu] = useState("Lobby");
//   const [loading, setLoading] = useState(false);
//   const [allGames, setAllGames] = useState();

//   const isLobby = stackMenu === "Lobby";

//   const menuItems = [
//     { label: "Lobby", icon: <TbCherryFilled color="#b1bad3" fontSize={15} /> },
//     {
//       label: "Stack Originals",
//       icon: <BsFire color="#b1bad3" fontSize={15} />,
//     },
//     { label: "Slot", icon: <Filter7Icon className="text-[#b1bad3]" /> },
//     { label: "Live Casino", icon: <InboxIcon className="text-[#b1bad3]" /> },
//     { label: "Game Shows", icon: <FaGift color="#b1bad3" fontSize={15} /> },
//     {
//       label: "Stake Exclusives",
//       icon: <BsBookmarkStarFill color="#b1bad3" fontSize={15} />,
//     },
//     {
//       label: "New Releases",
//       icon: <IoIosRocket color="#b1bad3" fontSize={20} />,
//     },
//   ];

//   useEffect(() => {
//     GetAllGames();
//   }, []);

//   const GetAllGames = async () => {
//     await getAllGames()
//       .then((response) => {
//         console.log("response", response);
//         setAllGames(response);
//       })
//       .catch((error) => {
//         console.log("error", error);
//       });
//   };

//   return (
//     <div className="flex justify-center h-screen bg-[#1a2c38]">
//       {loading ? (
//         <Loader />
//       ) : (
//         <div className="text-white pt-6 w-full max-w-screen-xl lg:px-3 xl:px-10">
//           {/* <SlideBar /> */}

//           <div className="mt-8 mx-3 relative">
//             <input
//               className="border-2 rounded-full w-full py-2 px-10 bg-[#0f212e] border-[#213743] hover:border-[#1b3d50] focus:outline-[#1b3d50]"
//               name="password"
//               type="text"
//               placeholder="Search your game"
//             />
//             <div className="absolute left-0 top-0 pt-2.5 px-3 flex items-center cursor-pointer text-[#b1bad3]">
//               <SearchIcon />
//             </div>
//           </div>

//           <div className="flex overflow-x-auto overflow-y-hidden touch-scroll transform translate-z-0 mx-3 my-7">
//             <div className="bg-[#0f212e] flex rounded-full p-[5px] flex-shrink-0 space-x-2 text-xs">
//               {menuItems.map((item) => (
//                 <button
//                   key={item.label}
//                   className={`py-2 px-5 rounded-full flex justify-center space-x-1.5 items-center ${
//                     stackMenu === item.label
//                       ? "bg-[#4d718768]"
//                       : "hover:bg-[#4d718768]"
//                   }`}
//                   onClick={() => setStackMenu(item.label)}
//                 >
//                   {item.icon}
//                   <p>{item.label}</p>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {stackMenu === "Lobby" ? (
//             <div>
//               <StackOriginals allGames={allGames} setLoading={setLoading} isLobby={isLobby} />
//               <Slots allGames={allGames} setLoading={setLoading} isLobby={isLobby}/>
//               <LiveCasino allGames={allGames} setLoading={setLoading} isLobby={isLobby} />
//               <GameShows allGames={allGames} setLoading={setLoading} isLobby={isLobby} />
//               <Exclusives allGames={allGames} setLoading={setLoading} isLobby={isLobby} />
//             </div>
//           ) : stackMenu === "Stack Originals" ? (
//             <StackOriginals allGames={allGames} setLoading={setLoading} isLobby={false} />
//           ) : stackMenu === "Slot" ? (
//             <Slots allGames={allGames} setLoading={setLoading} isLobby={false}/>
//           ) : stackMenu === "Live Casino" ? (
//             <LiveCasino allGames={allGames} setLoading={setLoading} isLobby={false} />
//           ) : stackMenu === "Game Shows" ? (
//             <GameShows allGames={allGames} setLoading={setLoading} isLobby={false} />
//           ) : stackMenu === "Stake Exclusives" ? (
//             <Exclusives allGames={allGames} setLoading={setLoading} isLobby={false} />
//           ) : (
//             <div className="text-center pt-5">Comming As soon New Releases</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default CasinoHomePage;



import React, { useEffect, useRef, useState } from "react";
import Loader from "../../component/Loader";
import SlideBar from "./SlideBar";
import StackOriginals from "./StackOriginals";
import SearchIcon from "@mui/icons-material/Search";
import { TbCherryFilled } from "react-icons/tb";
import { BsFire } from "react-icons/bs";
import Filter7Icon from "@mui/icons-material/Filter7";
import { FaGift } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import { BsBookmarkStarFill } from "react-icons/bs";
import InboxIcon from "@mui/icons-material/Inbox";
import Slots from "./Slots";
import LiveCasino from "./LiveCasino";
import GameShows from "./GameShows";
import Exclusives from "./Exclusives";
import { getAllGames, searchGames } from "../../../services/GameServices";
import { decodedToken } from "../../../resources/utility";
import { getWallet, updateWallet } from "../../../services/LoginServices";
import { useDispatch, useSelector } from "react-redux";
import { setWallet } from "../../../features/auth/authSlice";
import { useNavigate, useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

function CasinoHomePage() {
  const [stackMenu, setStackMenu] = useState("Lobby");
  const [loading, setLoading] = useState(false);
  const [allGames, setAllGames] = useState([]);
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const { id, gameName } = useParams()
  // const { openMenubar } = useSelector((state) => state.auth);
  const { isBetslipOpen, isType } = useSelector((state) => state.betslip);
  const { isChatOpen } = useSelector((state) => state.chat);
  const decoded = decodedToken();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const menuItems = [
    { label: "Lobby", icon: <TbCherryFilled color="#b1bad3" fontSize={15} /> },
    { label: "Listor Originals", icon: <BsFire color="#b1bad3" fontSize={15} /> },
    { label: "Slot", icon: <Filter7Icon className="text-[#b1bad3]" /> },
    { label: "Live Casino", icon: <InboxIcon className="text-[#b1bad3]" /> },
    { label: "Game Shows", icon: <FaGift color="#b1bad3" fontSize={15} /> },
    { label: "Listor Exclusives", icon: <BsBookmarkStarFill color="#b1bad3" fontSize={15} /> },
    { label: "New Releases", icon: <IoIosRocket color="#b1bad3" fontSize={20} /> },
  ];

  useEffect(() => {
    GetAllGames();
    UpdateWalletData();
    GetWalletData();
  }, []);

  const GetAllGames = async () => {
    try {
      const response = await getAllGames();
      setAllGames(response);
    } catch (error) {
      console.log("Error fetching games:", error);
    }
  };

  const GetWalletData = async () => {
    try {
      const res = await getWallet({ id: decoded?.userId });
      const wallet = parseFloat(res?.currentAmount) + parseFloat(res?.bonusAmount);
      dispatch(setWallet(wallet.toFixed(2)));
    } catch (error) {
      console.log("Error fetching wallet:", error);
    }
  };

  const UpdateWalletData = async () => {
    try {
      await updateWallet({ userId: decoded?.userId });
    } catch (error) {
      console.log("Error updating wallet:", error);
    }
  };

  const handleSearch = async (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    setDropdown(true);

    if (searchTerm.trim() === "") {
      setSearchResult(allGames);
      setDropdown(false);
      return;
    }
    setDropdown(true);
    try {
      const response = await searchGames({ game: searchTerm });
      // console.log("API Response:", response);
      if (response && Array.isArray(response.games)) {
        setSearchResult(response.games);
      } else {
        console.error("Unexpected response format:", response);
        setSearchResult([]);
      }
    } catch (error) {
      console.error("Error searching games:", error);
      setSearchResult([]);
    }
  };

  const handleGameSelect = (game) => {
    navigate(`/casino/${game.gameName}/${game.id}`);
  }
  // console.log("Type of searchResult:", searchResult);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const clearSearch = () => {
    setSearch("");
    setSearchResult([]);
    setDropdown(false);
  };

  const getMenuContainerClass = () => {
    if (windowWidth <= 768) {
      return isChatOpen || isBetslipOpen 
        ? "w-[20rem]" 
        : "w-[40rem]";
    } else if (windowWidth <= 1024) {
      return isChatOpen || isBetslipOpen
        ? "w-[30rem]"
        : "w-[45rem]";
    } else {
      return isChatOpen || isBetslipOpen
        ? "w-[57rem]"
        : "w-[80rem]";
    }
  };

  // const lablelMenuItem = () => {
  //   if(windowWidth <= 768) {
  //     return isChatOpen || isBetslipOpen
  //     ? ""
  //   }
  // }

  return (
    <div className="flex flex-col md:flex-row justify-center bg-[#1a2c38] z-40 ">
      {loading ? (
        <Loader />
      ) : (
       <div className="">
            <div className="text-white pt-6">
            {/* {/ <SlideBar /> /} */}
            </div>
            
            {/* {/ Search Section /} */}
            <div className="px-4 md:px-8 pt-8 relative">
              <div className="relative">
                <input
                  className="border-2 rounded-full w-full py-2 px-10 bg-[#0f212e] border-[#213743] hover:border-[#1b3d50] focus:outline-[#1b3d50] text-white"
                  value={search}
                  type="text"
                  placeholder="Search your game"
                  onChange={handleSearch}
                  onFocus={() => setDropdown(true)}
                />
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-[#557086]" />
              </div>
              {search && (
                <div
                  className="absolute right-7 top-8 pt-1 px-3 flex items-center cursor-pointer text-[#557086]"
                >
                  <IconButton onClick={clearSearch} sx={{ color: "white" }}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </div>
              )}
              {dropdown && (
                <div ref={dropdownRef} className=" bg-[#0f212e] border border-[#213743] flex space-x-4 rounded-md p-5 my-2 w-full z-50">
                  {Array.isArray(searchResult) && searchResult.map((game) => (
                    <div
                      key={game.id} // Add a key for each game
                      onClick={() => handleGameSelect(game)} // Use the new handler
                      className="cursor-pointer"
                    >
                      <img
                        src={game.gameImage}
                        alt={game.gameName}
                        className="w-32 h-44 rounded-md"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* {/ Menu Section /} */}
            <div className="flex justify-center my-7 text-white">
              <div className={`${getMenuContainerClass()} overflow-x-auto scrollbar-thin`}>
                <div className="bg-[#0f212e] flex rounded-full p-[5px] space-x-2 text-xs min-w-max">
                  {menuItems.map((item) => (
                    <button
                      key={item.label}
                      className={`py-2 px-3 md:px-5 rounded-full flex justify-center space-x-1.5 items-center whitespace-nowrap flex-shrink-0
                        ${stackMenu === item.label ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"}
                        ${windowWidth <= 768 && (isChatOpen || isBetslipOpen) ? 'text-[10px] px-2' : 'text-xs'}
                      `}
                      onClick={() => setStackMenu(item.label)}
                    >
                      {item.icon}
                      <p>{item.label}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* {/ Content Section /} */}
            <div className="flex flex-col space-y-6 md:px-0 lg:pr-10">
              {stackMenu === "Lobby" ? (
                <>
                  <StackOriginals allGames={search ? searchResult : allGames} setLoading={setLoading} />
                  <Slots allGames={search ? searchResult : allGames} setLoading={setLoading} />
                  <LiveCasino allGames={search ? searchResult : allGames} setLoading={setLoading} />
                  <GameShows allGames={search ? searchResult : allGames} setLoading={setLoading} />
                  <Exclusives allGames={search ? searchResult : allGames} setLoading={setLoading} />
                </>
              ) : stackMenu === "Listor Originals" ? (
                <StackOriginals allGames={search ? searchResult : allGames} setLoading={setLoading} />
              ) : stackMenu === "Slot" ? (
                <Slots allGames={search ? searchResult : allGames} setLoading={setLoading} />
              ) : stackMenu === "Live Casino" ? (
                <LiveCasino allGames={search ? searchResult : allGames} setLoading={setLoading} />
              ) : stackMenu === "Game Shows" ? (
                <GameShows allGames={search ? searchResult : allGames} setLoading={setLoading} />
              ) : stackMenu === "Listor Exclusives" ? (
                <Exclusives allGames={search ? searchResult : allGames} setLoading={setLoading} />
              ) : (
                <div className="text-center pt-5">Coming Soon: New Releases</div>
              )}
            </div>
        
       </div>
      )}
    </div>
  );
}

export default CasinoHomePage;
