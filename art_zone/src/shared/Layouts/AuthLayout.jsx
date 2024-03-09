import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <main className="m-8 p-5 bg-neutral-100 relative">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
