// import React from "react";
// import { Toaster } from "react-hot-toast";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import DefaultLayout from "./layout/DefaultLayout";
// import VerifyTerm from "./views/pages/register/VerifyTerm";
// import routes from "./routes"; // Import your routes

// function App() {
//   const status = localStorage.getItem("status");

//   return (
//     <>
//       <Toaster
//         position="bottom-right"
//         toastOptions={{
//           duration: 5000,
//           style: {
//             background: "#363636",
//             color: "#fff",
//           },
//         }}
//       />
//       <BrowserRouter>
//         <Routes>

//           <Route path="/" element={<DefaultLayout />}>
//             {routes.map((route, index) =>
//               route.children ? (
//                 <Route key={index} path={route.path} element={<route.element />}>
//                   {route.children.map((child, idx) => (
//                     <Route
//                       key={idx}
//                       path={child.path}
//                       element={<child.element />}
//                     />
//                   ))}
//                 </Route>
//               ) : (
//                 <Route
//                   key={index}
//                   path={route.path}
//                   element={<route.element />}
//                 />
//               )
//             )}
//           </Route>
//         </Routes>

//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import VerifyTerm from "./views/pages/register/VerifyTerm";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const status = localStorage.getItem("status");

  // const ScrollToTop = () => {
  //   const { pathname } = useLocation();
  //   console.log("Navigated toswssssssssssss:", pathname);
  //   window.scrollTo(0, 0);
  //   return null;
  // };

  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <Routes>
        <Route path="*" element={<DefaultLayout />} />
        <Route path="/verifyterm" element={<VerifyTerm />} />
        {/* Uncomment and adjust the following lines if you want to conditionally render routes */}
        {/* {!status ? (
          <Route path="/" element={<DefultPage />} />
        ) : ( */}
        {/* )} */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;