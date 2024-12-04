import { element } from "prop-types";
import React from "react";
import MyBets from "./views/component/GameTable/MyBets";
// import pokerTournamentCancellation from "./views/footerpage/pokerTournamentCancellation";

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
const VipProgramLevels = React.lazy(() => import("./views/footerpage/VipProgramLevels"))
const OnlineCasinoGuide = React.lazy(() => import("./views/footerpage/onlineCasinoGuide"))


const ComeSoon = React.lazy(() => import("./views/component/ComeSoon"))

// const antiMoneyLaundering = React.lazy(() => import("./views/footerpage/antiMoneyLaundering"))
const Slots = React.lazy(() => import("./views/casino/CasinoHomePage/Slots"));
const LiveCasion = React.lazy(() => import("./views/casino/CasinoHomePage/LiveCasino"))
const MyBet = React.lazy(() => import("./views/sidebar/myBets/MyBet"))
const GameShows = React.lazy(() => import("./views/casino/CasinoHomePage/GameShows"))
const Exclusives = React.lazy(() => import("./views/casino/CasinoHomePage/Exclusives"))
const StackOriginals = React.lazy(() => import("./views/casino/CasinoHomePage/StackOriginals"))
const NewReleases = React.lazy(() => import("./views/casino/CasinoHomePage/NewReleases"))
const Lobby = React.lazy(() => import("./views/casino/CasinoHomePage/Lobby"))
const Setting = React.lazy(() => import("./views/Profile/setting"));
const Profile = React.lazy(() => import("./views/Profile/index"))
const token = localStorage.getItem("token");

const Wallet = React.lazy(() =>import("./views/Profile/Wallet"))
const vipclub = React.lazy(() => import("./views/footerpage/VipClub"))

const Vault = React.lazy(() => import("./views/Profile/Vault"))
const Vip = React.lazy(()=> import("./views/Profile/Vip"))
const Statistics = React.lazy (() => import("./views/Profile/Statistic"))
const Notification = React.lazy(() => import("./views/Profile/Notification"))
const Logout = React.lazy(() => import("./views/Profile/Logout"))
const ResetPassword = React.lazy(() => import("./views/pages/forgotpassword/NewPassword"))
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
  { path: "/VipProgramLevels", name: "VipProgramLevels", element: VipProgramLevels },
  { path: "/OnlineCasinoGuide", name: "OnlineCasinoGuide", element: OnlineCasinoGuide },
  // { path: "/terms", name: "Terms", element: Terms },
  // { path: "/poker-tournament-cancellation", name: "PokerTournamentCancellation", element: pokerTournamentCancellation },
  // { path: "/card-room-rules", name: "CardRoomRules", element: CardRoomRules },
  // { path: "/racing-rules", name: "RacingRules", element: RacingRules },
  // { path: "/self-exclusion", name: "SelfExclusion", element: SelfExclusion },
  // { path: "/cookies", name: "Cookies", element: Cookies },
  // { path: "/providers", name: "Providers", element: Providers },
  // { path: "/sportsbook", name: "Sportsbook", element: Sportsbook },
  // { path: "/wager-requirements", name: "WagerRequirements", element: WagerRequirements },
  // { path: "/anti-money-laundering", name: "antiMoneyLaundering", element: antiMoneyLaundering },
  // { path: "/Privacy", name: "Privacy", element: Privacy },
  // { path: "/coin-mixing", name: "CoinMixing", element: CoinMixing },
  { path: "/profile", name: "profile", element: Profile },
  { path: "/setting", name: "Setting", element: Setting },
  { path: "/setting/:section", name: "Setting", element: Setting },
  {
    path: "/Policies/:section", name: "Policies", element: Policies,

  },
  {path: "/Wallet", name: "Wallet", element: Wallet},
  {path: "/vip-club", name: "VipClub", element: vipclub},
  {path: "/Vault", name: "Vault", element: Vault},
  {path: "/Vip", name: "Vip", element: Vip},
  {path: "/Statistics", name: "Statistics", element: Statistics},
  {path: "/Notification", name: "Notification", element: Notification},
  {path: "/logout", name: "Logout", element: Logout },
  {path: "/myBet", name: "MyBets", element: MyBet},
  {path: "/resetpassword", name: "ResetPassword", element: ResetPassword }
];

export default routes;
