import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../routes";

function Content() {
  // console.log("routes", routes);
  
  return (
    <div>
      <Routes>
        {routes?.map((route, idx) => {
          return (
            route.element && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={<route.element />}
              />
            )
          );
        })}
        <Route path="/" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default Content;
