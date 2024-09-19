import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import VerifyTerm from "./views/pages/register/VerifyTerm";
import { CrashSocket } from "./socket";
import { useEffect } from "react";
import DynamicGameRoutes from "./DynamicGameRoutes";

function App() {
  useEffect(() => {
    CrashSocket.on("connect", () => {
      console.log("sokect connected");
    });

    CrashSocket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    CrashSocket.on("connect_error", (error) => {
      console.error("Connection Error:", error);
    });

    return () => {
      CrashSocket.off("message");
    };
  }, []);

  return (
    <>
      <Toaster
        position="bottom-right"
        // top-left
        toastOptions={{
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="*" name="Home" element={<DefaultLayout />} />
            <Route path="/verifyterm" element={<VerifyTerm />} />
            <Route
              path="/casino/games/:gameName/:id"
              name="DynamicGame"
              element={<DynamicGameRoutes />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
