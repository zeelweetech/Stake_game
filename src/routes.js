import React from "react";
import { jwtDecode } from "jwt-decode";
const LandingBanner = React.lazy(() => import("./views/lendingpage/index"));
const Homepage = React.lazy(() => import("./views/Homepage/index"));
const CasinoHomePage = React.lazy(() =>
  import("./views/casino/CasinoHomePage")
);
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
  { path: "/casino/home", name: "Casino-Home", element: CasinoHomePage },
  { path: "/casino/games/crash", name: "Crash", element: CrashGame },
  { path: "/casino/games/plinko", name: "Plinko", element: PlinkoGame },
];

export default routes;
