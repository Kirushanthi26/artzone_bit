import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Navigation/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className="m-8 p-5 bg-neutral-100 relative">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
