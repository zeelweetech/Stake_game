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
        const wallet = parseFloat(res?.currentAmount) + parseFloat(res?.bonusAmount)
        dispatch(setWallet(wallet.toFixed(2)));
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
        <div className="text-white font-bold pt-6 w-full max-w-screen-xl lg:px-3 xl:px-10">
                    <div className="flex items-center mx-3 mt-8 space-x-2">
          <TbCherryFilled 
            size={28}
            className="text-[#b1bad3] hover:text-white"
          />
          <Link className="text-lg font-medium text-white">Lobby</Link>
        </div>
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
                // allGames={allGames}
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

export default Lobby;
