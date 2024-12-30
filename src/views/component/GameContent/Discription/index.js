import React from "react";
import { useParams } from "react-router-dom";
import CrashDiscription from "./CrashDiscription";
import PlinkoDiscription from "./PlinkoDiscription";
import MinesDiscription from "./MinesDiscription";
import LimboDiscription from "./LimboDiscription";
import WheelDiscription from "./WheelDiscription";
import DragonTowerDiscription from "./DragonTowerDiscription";
import KenoDiscription from "./KenoDiscription";

function Discription() {
  const { gameName } = useParams();

  const GameHandler = () => {
    switch (gameName) {
      case "Crash":
        return <CrashDiscription />;
      case "Plinko":
        return <PlinkoDiscription />;
      case "Mines":
        return <MinesDiscription />;
      case "Limbo":
        return <LimboDiscription />;
      case "Wheel":
        return <WheelDiscription />;
      case "DragonTower":
        return <DragonTowerDiscription />;
      case "keno":
        return <KenoDiscription />
      default:
        break;
    }
  };
  return GameHandler();
}

export default Discription;
