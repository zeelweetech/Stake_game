import React from "react";
const LandingBanner = React.lazy(() => import("./views/lendingpage/index"));

const routes = [{ path: "/", name: "Home", element: LandingBanner }];

export default routes;
