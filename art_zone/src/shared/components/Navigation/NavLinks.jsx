import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {

    let link = "text-natural-100 font-title hover:text-yellow-400"

  return (
    <ul className="flex">
      <li className="mr-6">
        <NavLink to="/u1/profile" className={link}>Profile</NavLink>
      </li>
      <li className="mr-6">
        <NavLink to="/friends" className={link}>Friends</NavLink>
      </li>
      <li className="mr-6">
        <NavLink to="/shops" className={link}>Shopping</NavLink>
      </li>
      <li className="mr-6">
        <NavLink to="/events" className={link}>Events</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
