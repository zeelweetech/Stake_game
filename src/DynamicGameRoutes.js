import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import Loader from "./views/component/Loader";
const CrashGame = React.lazy(() =>
  import("./views/casino/StackOriginalsGames/CrashGame")
);
const PlinkoGame = React.lazy(() =>
  import("./views/casino/StackOriginalsGames/PlinkoGame")
);

function DynamicGameRoutes() {
  const { gameName, id } = useParams();

  const getGameComponent = (gameName) => {
    switch (gameName) {
      case "crash":
        return CrashGame;
      case "Plinko":
        return PlinkoGame;
      // Add more cases as needed for other games
      default:
        return null;
    }
  };

  const GameComponent = getGameComponent(gameName);

  return (
    <div>
      {GameComponent ? (
        <Suspense
          fallback={
            <div className="flex justify-center h-screen bg-[#1a2c38]">
              <Loader />
            </div>
          }
        >
          <GameComponent gameId={id} />
        </Suspense>
      ) : (
        <div>Game not found</div>
      )}
    </div>
  );
}

export default DynamicGameRoutes;
