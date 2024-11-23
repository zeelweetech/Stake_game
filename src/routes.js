import React from "react";
const LandingBanner = React.lazy(() => import("./views/lendingpage/index"));
const Homepage = React.lazy(() => import("./views/Homepage/index"));
const CasinoHomePage = React.lazy(() =>
  import("./views/casino/CasinoHomePage")
);
const GameContainer = React.lazy(() =>
  import("./views/casino/StackOriginalsGames")
);
const Slots = React.lazy(() => import("./views/casino/CasinoHomePage/Slots"));
const LiveCasion = React.lazy(() => import("./views/casino/CasinoHomePage/LiveCasino"))
const GameShows = React.lazy(() => import("./views/casino/CasinoHomePage/GameShows"))
const Exclusives = React.lazy(() => import("./views/casino/CasinoHomePage/Exclusives"))
const StackOriginals = React.lazy(() => import("./views/casino/CasinoHomePage/StackOriginals"))
const NewReleases = React.lazy(() => import("./views/casino/CasinoHomePage/NewReleases"))
const Lobby = React.lazy(() => import("./views/casino/CasinoHomePage/Lobby"))
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
  {path: "/Lobby", name: "Lobby", element: Lobby},
  {path: "/slots", name: "Slots", element: Slots},
  {path: "/LiveCasion", name: "LiveCasion", element: LiveCasion},
  {path: "/GameShows", name: "GameShows", element: GameShows},
  {path: "/Exclusives", name: "Exclusives", element: Exclusives},
  {path: "/StackOriginals", name: "StackOriginals", element: StackOriginals},
  {path: "/NewReleases", name: "NewReleases", element: NewReleases}
];

export default routes;
