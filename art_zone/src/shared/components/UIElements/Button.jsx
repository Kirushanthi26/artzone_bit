import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  if (props.to) {
    return <Link to={props.to}>{props.children}</Link>;
  }

  if (props.href) {
    return <a href={props.href}>{props.children}</a>;
  }

  return (
    <button
      className="bg-yellow-400 capitalize font-title font-medium py-4 px-8 rounded-full hover:bg-yellow-500 hover:shadow-md"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
