import React, { useEffect, useState } from "react";
import Loader from "../../component/Loader";
import StackOriginals from "./StackOriginals";
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
import { Link } from "react-router-dom";

function Lobby() {
  const [stackMenu, setStackMenu] = useState("Lobby");
  const [loading, setLoading] = useState(true);
  const [allGames, setAllGames] = useState([]);
  const decoded = decodedToken();
  const dispatch = useDispatch();

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
    const fetchData = async () => {
      setLoading(true);
      try {
        await GetWalletData();
        const games = await getAllGames(); // Assuming you have a function to fetch all games
        setAllGames(games);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [decoded?.userId]);

  const GetWalletData = async () => {
    try {
      const res = await getWallet({ id: decoded?.userId });
      const wallet = parseFloat(res?.currentAmount) + parseFloat(res?.bonusAmount);
      dispatch(setWallet(wallet.toFixed(2)));
    } catch (err) {
      console.error("Error fetching wallet data:", err);
    }
  };

  const handleMenuClick = (menu) => {
    setStackMenu(menu);
  };

  return (
    <div className={`flex justify-center items-center h-full bg-[#1a2c38]`}>
      {loading ? (
        <Loader />
      ) : (
        <div className={`text-white font-bold pt-6 w-full max-w-screen-xl lg:px-3 xl:px-4`}>
          <div className="flex items-center mx-3 mt-8 space-x-2 lg:px-2 xl:px-6">
            <TbCherryFilled size={28} className="text-[#b1bad3] hover:text-white" />
            <Link className="text-lg font-medium text-white">Lobby</Link>
          </div>
          <div className="flex flex-col space-y-6">
            {stackMenu === "Lobby" ? (
              <>
                <StackOriginals allGames={allGames} setLoading={setLoading} />
                <Slots allGames={allGames} setLoading={setLoading} />
                <LiveCasino allGames={allGames} setLoading={setLoading} />
                <GameShows allGames={allGames} setLoading={setLoading} />
                <Exclusives allGames={allGames} setLoading={setLoading} />
              </>
            ) : stackMenu === "Listor Originals" ? (
              <StackOriginals allGames={allGames} setLoading={setLoading} />
            ) : stackMenu === "Slot" ? (
              <Slots setLoading={setLoading} />
            ) : stackMenu === "Live Casino" ? (
              <LiveCasino allGames={allGames} setLoading={setLoading} />
            ) : stackMenu === "Game Shows" ? (
              <GameShows allGames={allGames} setLoading={setLoading} />
            ) : stackMenu === "Listor Exclusives" ? (
              <Exclusives allGames={allGames} setLoading={setLoading} />
            ) : (
              <div className="text-center pt-5">Coming Soon: New Releases</div>
            )}
          </div>
          <div className="flex space-x-4 mt-4">
            {menuItems.map((item) => (
              <button key={item.label} onClick={() => handleMenuClick(item.label)} className="flex items-center space-x-2">
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Lobby;