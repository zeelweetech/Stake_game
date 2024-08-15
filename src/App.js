import logo from "./logo.svg";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/pages/login/Login";
import Register from "./views/pages/register/Register";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./views/homepage";

function App() {
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
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route
              exact
              path="/register"
              name="Register Page"
              element={<Register />}
            />
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
