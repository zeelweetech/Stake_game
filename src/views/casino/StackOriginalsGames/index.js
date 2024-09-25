import React from "react";
import { useParams } from "react-router-dom";
import CrashGame from "./CrashGame";
import PlinkoGame from "./PlinkoGame";
import HomePage from "../../Homepage";

function GameContainer() {
  const { gameName } = useParams();

  const GameHandler = () => {
    switch (gameName) {
      case "Crash":
        return <CrashGame />;
      case "Plinko":
        return <PlinkoGame />;
      //   case "Miens":
      //     return <HomePage />;
      //   case "Limbo":
      //     return <HomePage />;
      //   case "Wheel":
      //     return <HomePage />;
      //   case "Dragon Tower":
      //     return <HomePage />;
      default:
        break;
    }
  };
  return GameHandler();
}

export default GameContainer;
