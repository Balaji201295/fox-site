import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Copyright } from "./components";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Copyright />
    </>
  );
}

export default App;
