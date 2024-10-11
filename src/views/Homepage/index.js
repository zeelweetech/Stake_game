import React, { useEffect, useState } from "react";
import Loader from "../component/Loader";
import Mainbar from "./Mainbar";
import StackOriginals from "../casino/CasinoHomePage/StackOriginals";
import Slots from "../casino/CasinoHomePage/Slots";
import LiveCasino from "../casino/CasinoHomePage/LiveCasino";
import GameShows from "../casino/CasinoHomePage/GameShows";
import Exclusives from "../casino/CasinoHomePage/Exclusives";
import { getAllGames } from "../../services/GameServices";

function MainHomePage() {
  // const [stackMenu, setStackMenu] = useState("Lobby");
  const [loading, setLoading] = useState(false);
  const [allGames, setAllGames] = useState();

  // const isLobby = stackMenu === "Lobby";

  useEffect(() => {
    GetAllGames();
  }, []);

  const GetAllGames = async () => {
    await getAllGames()
      .then((response) => {
        console.log("response", response);
        setAllGames(response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="flex justify-center h-screen bg-[#1a2c38]">
      {loading ? (
        <Loader />
      ) : (
        <div className="text-white">
          <Mainbar />
          <div className="xl:px-44 lg:px-14 mt-8">
            <StackOriginals allGames={allGames} setLoading={setLoading}/>
            <Slots allGames={allGames}/>
            <LiveCasino allGames={allGames}/>
            <GameShows allGames={allGames}/>
            <Exclusives allGames={allGames}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainHomePage;
