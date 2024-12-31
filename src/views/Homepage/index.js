import React, { useEffect, useState } from "react";
import Loader from "../component/Loader";
import Mainbar from "./Mainbar";
import StackOriginals from "../casino/CasinoHomePage/StackOriginals";
import Slots from "../casino/CasinoHomePage/Slots";
import LiveCasino from "../casino/CasinoHomePage/LiveCasino";
import GameShows from "../casino/CasinoHomePage/GameShows";
import Exclusives from "../casino/CasinoHomePage/Exclusives";
import { getAllGames } from "../../services/GameServices";
import { getWallet, updateWallet } from "../../services/LoginServices";
import { setWallet } from "../../features/auth/authSlice";
import { decodedToken } from "../../resources/utility";
import { useDispatch, useSelector } from "react-redux";

function MainHomePage() {
  // const [stackMenu, setStackMenu] = useState("Lobby");
  const [loading, setLoading] = useState(false);
  const [allGames, setAllGames] = useState();
  const decoded = decodedToken();
  const dispatch = useDispatch();
  const { isBetslipOpen } = useSelector((state) => state.betslip);

  // const isLobby = stackMenu === "Lobby";

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
      .catch((err) => { });
  };

  const UpdateWalletData = async () => {
    await updateWallet({ userId: decoded?.userId })
      .then((res) => { })
      .catch((err) => { });
  };

  return (
    <div className="h-full bg-[#1a2c38] lg:pr-14 xl:pr-0 pr-0">
      {loading ? (
        <Loader />
      ) : (
        <div className="text-white">
          <Mainbar />
          <div className="mt-8 flex justify-center">
            <div>
              <StackOriginals allGames={allGames} setLoading={setLoading} />
              <Slots />
              <LiveCasino allGames={allGames} />
              <GameShows allGames={allGames} />
              <Exclusives allGames={allGames} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainHomePage;
