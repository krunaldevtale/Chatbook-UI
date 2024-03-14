import React from "react";
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
}

export default Layout;
