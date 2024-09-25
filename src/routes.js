import React from "react";

const LandingBanner = React.lazy(() => import("./views/lendingpage/index"));
const Homepage = React.lazy(() => import("./views/Homepage/index"));
const CasinoHomePage = React.lazy(() =>
  import("./views/casino/CasinoHomePage")
);
const GameContainer = React.lazy(() =>
  import("./views/casino/StackOriginalsGames")
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
  {
    path: "/casino/:gameName/:id",
    name: "GameContainer",
    element: GameContainer,
  },
];

export default routes;
