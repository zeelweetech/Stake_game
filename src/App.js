import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import VerifyTerm from "./views/pages/register/VerifyTerm";
import { socket } from "./socket";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("sokect connected");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    socket.on("connect_error", (error) => {
      console.error("Connection Error:", error);
    });

    return () => {
      socket.off("message");
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
