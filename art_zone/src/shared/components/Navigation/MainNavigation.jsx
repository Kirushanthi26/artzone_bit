import React from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import ProfileNavigation from "./ProfileNavigation";

const MainNavigation = () => {
  return (
    <MainHeader>
      <h1 className="text-3xl md:text-4xl font-title font-bold tracking-wider">
        <Link to="/home">ArtZone</Link>
      </h1>
      <nav>
        <NavLinks/>
      </nav>
      <nav>
        <ProfileNavigation/>
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
