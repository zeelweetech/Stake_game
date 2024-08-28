import React from "react";
const LandingBanner = React.lazy(() => import("./views/lendingpage/index"));
const CasinoHomePage = React.lazy(() =>
  import("./views/casino/CasinoHomePage")
);
const CrashGame = React.lazy(() =>
  import("./views/casino/StackOriginalsGames/CrashGame")
);

const routes = [
  { path: "/", name: "Home", element: LandingBanner },
  { path: "/casino/home", name: "Casino-Home", element: CasinoHomePage },
  { path: "/casino/games/crash", name: "Crash", element: CrashGame },
];

export default routes;
