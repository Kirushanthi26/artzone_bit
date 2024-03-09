import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "../UIElements/Avatar";
// import { ShoppingCart } from "@mui/icons-material";
import { LogoutOutlined } from "@mui/icons-material";
//import { Button } from "@mui/material";
import Cart from "../../../Shopping/pages/Cart";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from 'react-router-dom';

const ProfileNavigation = () => {
  const navigateTo = useNavigate();
  let link = "text-natural-100 font-title hover:text-yellow-400";
  let profileImg =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const handleLogout = () => {
    useAuthStore.getState().logout();
    navigateTo("/");
  };

  return (
    <ul className="flex items-center">
      <li className="mr-10">
        <Avatar
          src={profileImg}
          alt={"profile image"}
          userName={"kirushanthi"}
        />
      </li>
      <li className="mr-6">
        {/* <NavLink to="/cart" className={link}> */}
        <Cart />
        {/* </NavLink> */}
      </li>
      <li className="mr-6">
        <button onClick={handleLogout}>
          <LogoutOutlined />
        </button>
      </li>
    </ul>
  );
};

export default ProfileNavigation;
