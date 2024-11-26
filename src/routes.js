import { element } from "prop-types";
import React from "react";

const LandingBanner = React.lazy(() => import("./views/lendingpage/index"));
const Homepage = React.lazy(() => import("./views/Homepage/index"));
const CasinoHomePage = React.lazy(() =>
  import("./views/casino/CasinoHomePage")
);
const GameContainer = React.lazy(() =>
  import("./views/casino/StackOriginalsGames")
);
const HelpCenter = React.lazy(() =>
  import("./views/footerpage/HelpCenter"))
const Policies = React.lazy(() => import("./views/footerpage/Policies"))
const Terms = React.lazy(() => import("./views/footerpage/Terms"))
// ... existing code ...
const WagerRequirements = React.lazy(() => import("./views/footerpage/WagerRequirement"))
// Remove the duplicated commented line
const ComeSoon = React.lazy(() => import("./views/component/ComeSoon"))
// ... existing code ...


const Slots = React.lazy(() => import("./views/casino/CasinoHomePage/Slots"));
const LiveCasion = React.lazy(() => import("./views/casino/CasinoHomePage/LiveCasino"))
const GameShows = React.lazy(() => import("./views/casino/CasinoHomePage/GameShows"))
const Exclusives = React.lazy(() => import("./views/casino/CasinoHomePage/Exclusives"))
const StackOriginals = React.lazy(() => import("./views/casino/CasinoHomePage/StackOriginals"))
const NewReleases = React.lazy(() => import("./views/casino/CasinoHomePage/NewReleases"))
const Lobby = React.lazy(() => import("./views/casino/CasinoHomePage/Lobby"))
const Setting = React.lazy(() => import("./views/Profile/Setting"));

const Profile = React.lazy(() => import("./views/Profile/index"))
const token = localStorage.getItem("token");
// const General = React.lazy(() => import("./views/Profile/Setting/General"))
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
  { path: "/Lobby", name: "Lobby", element: Lobby },
  { path: "/slots", name: "Slots", element: Slots },
  { path: "/LiveCasion", name: "LiveCasion", element: LiveCasion },
  { path: "/GameShows", name: "GameShows", element: GameShows },
  { path: "/Exclusives", name: "Exclusives", element: Exclusives },
  { path: "/StackOriginals", name: "StackOriginals", element: StackOriginals },
  { path: "/NewReleases", name: "NewReleases", element: NewReleases },
  { path: "/ComeSoon", name: "ComeSoon", element: ComeSoon },
  { path: "/HelpCenter", name: "HelpCenter", element: HelpCenter },
  {
    path: "/Policies", name: "Policies", element: Policies,
    // children: [
    //   { path: "terms", name: "Terms", element: Terms }, // No leading slash
    //   { path: "privacy", name: "Privacy", element: Policies }, // Example of another child
    // ],
  },
  { path: "/terms", name: "Terms", element: Terms },
  { path: "/wager-requirements", name: "WagerRequirements", element: WagerRequirements },



  {path: "/profile", name: "Profile", element: Profile},
  { path: "/setting", name: "Setting", element: Setting }, 
  { path:"/setting/:section", name: "Setting", element: Setting}

];

export default routes;
