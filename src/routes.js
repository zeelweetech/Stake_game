import React from "react";
const HomePage = React.lazy(() => import("./views/homepage/index"));

const routes = [{ path: "/", name: "Home", element: HomePage }];

export default routes;
