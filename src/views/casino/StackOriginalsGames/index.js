import React from "react";
import { useParams } from "react-router-dom";
import CrashGame from "./CrashGame";
import PlinkoGame from "./PlinkoGame";
import MinesGame from "./MinesGame";
import LimboGame from "./LimboGame";
import WheelGame from "./WheelGame";
import DragonTowerGame from "./DragonTowerGame";
import ComeSoon from "../../component/ComeSoon";
import KenoGame from "./KenoGame";
import SlideGame from "./SlideGame";

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
      case "keno":
        return <KenoGame />;
      case "slide":
        return <SlideGame />
      case gameName:
        // case "GatesHeaven":
        // case "FireHole2":
        // case "BigBass":
        // case "SlayersINC":
        // case "DogHouse":
        // case "FistDestruction":
        // case "Black jack":
        // case "SweetFiesta":
        // case "TomeLife":
        // case "FruitParty":
        // case "RipCity":
        // case "FirePortals":
        // case "ZeusHades":
        // case "leBandit":
        // case "SugarRush":
        // case "GatesOlympus":
        // case "WantedDead":
        // case "SweetBonanza":
        // case "Roulette":
        // case "Baccarat":
        // case "Dragon tiger":
        // case "Craps":
        // case "Extreme Texas":
        // case "RedDoor":
        // case "Bac bo":
        // case "Casino Holdem":
        // case "Stock market":
        // case "Crazy Time":
        // case "Cash or Crash":
        // case "Lighting Ball":
        // case "Crazy pachinko":
        // case "Gonzos":
        // case "Mono pol":
        // case "Football studio":
        // case "Monopoly big baller":
        // case "Mega ball":
        // case "Mono poly":
        // case "Funky Time":
        // case "Crazy Coinflip":
        // case "Lightning Roulette":
        // case "Lightning Storm":
        // case "Balloon Race":
        // case "Monopoly":
        // case "Lightning Blackjack":
        // case "Red door Roulette":
        // case "Sweet Bonanza Candyland":
        // case "Lightning Baccarat":
        // case "Gold Vault Roulette":
        // case "Royal Riches Roulette":
        // case "Megaball":
        // case "Lightning Dice":
        // case "Sweet Fiesta":
        // case "Brains Breakfast":
        // case "Brains Breakfast":
        // case "Big Bass Boom":
        // case "Bonsai Banzai":
        // case "Dog Mansion Megaways":
        // case "Poseidon Apollo":
        // case "POP Royale":
        // case "Clash of Fangs":
        // case "Roosters Revenge":
        // case "Pixel Farm":
        // case "Wild west Bounty":
        // case "Athena Ares":
        // case "Bison Spirit":
        // case "Wild west Bonanza":
        // case "Skyship Raiders":
        // case "Dracs Stackes":
        // case "Jewel Bonanza":
        // case "Spaceknight Merge Up":
        // case "Gates of Heaven":
        // case "Sugar Twist":
        // case "Slushie Party":
        return <ComeSoon />;
      default:
        break;
    }
  };
  return GameHandler();
}

export default GameContainer;
