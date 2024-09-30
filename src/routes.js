import React from "react";
<<<<<<< HEAD
import { jwtDecode } from "jwt-decode";
import { element } from "prop-types";
=======

>>>>>>> 2c08ad91710b944a47470b1abc5d8295a7f31ca0
const LandingBanner = React.lazy(() => import("./views/lendingpage/index"));
const Homepage = React.lazy(() => import("./views/Homepage/index"));
const CasinoHomePage = React.lazy(() =>
  import("./views/casino/CasinoHomePage")
);
const GameContainer = React.lazy(() =>
  import("./views/casino/StackOriginalsGames")
);
<<<<<<< HEAD
const PlinkoGame = React.lazy(() =>
  import("./views/casino/StackOriginalsGames/PlinkoGame")
);
const MinesGame = React.lazy(() => import("./views/casino/StackOriginalsGames/MinesGame"))

=======
>>>>>>> 2c08ad91710b944a47470b1abc5d8295a7f31ca0
const token = localStorage.getItem("token");

const routes = [
  {
    path: "/",
    name: "Home",
    element: token ? Homepage : LandingBanner,
  },
  { path: "/dashboard", name: "Casino-Home", element: CasinoHomePage },
  { path: "/casino/home", name: "Casino-Home", element: CasinoHomePage },
<<<<<<< HEAD
  // {
  //   path: "/casino/games/:gameName/:id",
  //   name: "DynamicGame",
  //   element: DynamicGameRoutes,
  // },
  { path: "/casino/games/crash", name: "Crash", element: CrashGame },
  { path: "/casino/games/plinko", name: "Plinko", element: PlinkoGame },
  {path: "/casino/games/mines", name: "Mines", element: MinesGame }
=======
  {
    path: "/casino/:gameName/:id",
    name: "GameContainer",
    element: GameContainer,
  },
>>>>>>> 2c08ad91710b944a47470b1abc5d8295a7f31ca0
];

export default routes;
