import React, { useEffect, useState } from "react";
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
import { getAllGames } from "../../../services/GameServices";
import { decodedToken } from "../../../resources/utility";
import { getWallet, updateWallet } from "../../../services/LoginServices";
import { useDispatch } from "react-redux";
import { setWallet } from "../../../features/auth/authSlice";

function CasinoHomePage() {
  const [stackMenu, setStackMenu] = useState("Lobby");
  const [loading, setLoading] = useState(false);
  const [allGames, setAllGames] = useState();
  const decoded = decodedToken();
  const dispatch = useDispatch();

  const isLobby = stackMenu === "Lobby";

  const menuItems = [
    { label: "Lobby", icon: <TbCherryFilled color="#b1bad3" fontSize={15} /> },
    {
      label: "Listor Originals",
      icon: <BsFire color="#b1bad3" fontSize={15} />,
    },
    { label: "Slot", icon: <Filter7Icon className="text-[#b1bad3]" /> },
    { label: "Live Casino", icon: <InboxIcon className="text-[#b1bad3]" /> },
    { label: "Game Shows", icon: <FaGift color="#b1bad3" fontSize={15} /> },
    {
      label: "Listor Exclusives",
      icon: <BsBookmarkStarFill color="#b1bad3" fontSize={15} />,
    },
    {
      label: "New Releases",
      icon: <IoIosRocket color="#b1bad3" fontSize={20} />,
    },
  ];

  useEffect(() => {
    GetAllGames();
    UpdateWalletData();
    GetWalletData();
  }, []);

  const GetAllGames = async () => {
    await getAllGames()
      .then((response) => {
        setAllGames(response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const GetWalletData = async () => {
    await getWallet({ id: decoded?.userId })
      .then((res) => {
        dispatch(setWallet(res?.currentAmount));
      })
      .catch((err) => {});
  };

  const UpdateWalletData = async () => {
    await updateWallet({ userId: decoded?.userId })
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <div className="flex justify-center h-screen bg-[#1a2c38]">
      {loading ? (
        <Loader />
      ) : (
        <div className="text-white pt-6 w-full max-w-screen-xl lg:px-3 xl:px-10">
          <SlideBar />

          <div className="mt-8 mx-3 relative">
            <input
              className="border-2 rounded-full w-full py-2 px-10 bg-[#0f212e] border-[#213743] hover:border-[#1b3d50] focus:outline-[#1b3d50]"
              name="search"
              type="text"
              placeholder="Search your game"
            />
            <div className="absolute left-0 top-0 pt-2.5 px-3 flex items-center cursor-pointer text-[#b1bad3]">
              <SearchIcon />
            </div>
          </div>

          <div className="flex overflow-x-auto overflow-y-hidden touch-scroll transform translate-z-0 mx-3 my-7">
            <div className="bg-[#0f212e] flex rounded-full p-[5px] flex-shrink-0 space-x-2 text-xs">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  className={`py-2 px-5 rounded-full flex justify-center space-x-1.5 items-center ${
                    stackMenu === item.label
                      ? "bg-[#4d718768]"
                      : "hover:bg-[#4d718768]"
                  }`}
                  onClick={() => setStackMenu(item.label)}
                >
                  {item.icon}
                  <p>{item.label}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col space-y-6">
            {stackMenu === "Lobby" ? (
              <>
                <StackOriginals
                  allGames={allGames}
                  setLoading={setLoading}
                  isLobby={isLobby}
                />
                <Slots
                  allGames={allGames}
                  setLoading={setLoading}
                  isLobby={isLobby}
                />
                <LiveCasino
                  allGames={allGames}
                  setLoading={setLoading}
                  isLobby={isLobby}
                />
                <GameShows
                  allGames={allGames}
                  setLoading={setLoading}
                  isLobby={isLobby}
                />
                <Exclusives
                  allGames={allGames}
                  setLoading={setLoading}
                  isLobby={isLobby}
                />
              </>
            ) : stackMenu === "Listor Originals" ? (
              <StackOriginals
                allGames={allGames}
                setLoading={setLoading}
                isLobby={false}
              />
            ) : stackMenu === "Slot" ? (
              <Slots
                allGames={allGames}
                setLoading={setLoading}
                isLobby={false}
              />
            ) : stackMenu === "Live Casino" ? (
              <LiveCasino
                allGames={allGames}
                setLoading={setLoading}
                isLobby={false}
              />
            ) : stackMenu === "Game Shows" ? (
              <GameShows
                allGames={allGames}
                setLoading={setLoading}
                isLobby={false}
              />
            ) : stackMenu === "Listor Exclusives" ? (
              <Exclusives
                allGames={allGames}
                setLoading={setLoading}
                isLobby={false}
              />
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
