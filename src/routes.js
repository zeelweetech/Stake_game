import React from "react";
import { jwtDecode } from "jwt-decode";
const LandingBanner = React.lazy(() => import("./views/lendingpage/index"));
const Homepage = React.lazy(() => import("./views/Homepage/index"));
const CasinoHomePage = React.lazy(() =>
  import("./views/casino/CasinoHomePage")
);
// const DynamicGameRoutes = React.lazy(() => import("./DynamicGameRoutes"));
const CrashGame = React.lazy(() =>
  import("./views/casino/StackOriginalsGames/CrashGame")
);
const PlinkoGame = React.lazy(() =>
  import("./views/casino/StackOriginalsGames/PlinkoGame")
);

const token = localStorage.getItem("token");
const routes = [
  {
    path: "/",
    name: "Home",
    element: token ? Homepage : LandingBanner,
  },
  { path: "/dashboard", name: "Casino-Home", element: CasinoHomePage },
  { path: "/casino/home", name: "Casino-Home", element: CasinoHomePage },
  // {
  //   path: "/casino/games/:gameName/:id",
  //   name: "DynamicGame",
  //   element: DynamicGameRoutes,
  // },
  { path: "/casino/games/crash", name: "Crash", element: CrashGame },
  { path: "/casino/games/plinko", name: "Plinko", element: PlinkoGame },
];

export default routes;
