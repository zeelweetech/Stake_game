import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import VerifyTerm from "./views/pages/register/VerifyTerm";
import DefultPage from "./defultPage";

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
        <Routes>
          <Route>
            {!status ? (
              <Route path="/" element={<DefultPage />} />
            ) : (
              <Route path="*" name="Home" element={<DefaultLayout />} />
            )}
            <Route path="/verifyterm" element={<VerifyTerm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
