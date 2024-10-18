import React from "react";
import { useParams } from "react-router-dom";
import CrashGame from "./CrashGame";
import PlinkoGame from "./PlinkoGame";
import MinesGame from "./MinesGame";
import LimboGame from "./LimboGame";
import WheelGame from "./WheelGame";
import DragonTowerGame from "./DragonTowerGame";

function GameContainer() {
  const { gameName } = useParams();

  const GameHandler = () => {
    switch (gameName) {
      case "Crash":
        return <CrashGame />;
      case "Plinko":
        return <PlinkoGame />;
      case "Mines":
        return <MinesGame />;
      case "Limbo":
        return <LimboGame />;
      case "Wheel":
        return <WheelGame />;
      case "DragonTower":
        return <DragonTowerGame />;
      default:
        break;
    }
  };
  return GameHandler();
}

export default GameContainer;
