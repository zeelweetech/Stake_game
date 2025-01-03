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
import { BrowserRouter, Route, Routes, ScrollRestoration } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import VerifyTerm from "./views/pages/register/VerifyTerm";
import ScrollToTop from "./components/ScrollTop";
// import DefultPage from "./defultPage";

function App() {
  const status = localStorage.getItem("status");
  return (
    <>
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
      <BrowserRouter>
      {/* <ScrollToTop/>  */}
        <Routes>
          <Route>
            {/* {!status ? (
              <Route path="/" element={<DefultPage />} />
            ) : ( */}
              <Route path="*" name="Home" element={<DefaultLayout />} />
            {/* )} */}
            <Route path="/verifyterm" element={<VerifyTerm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
