import React from "react";

const Avatar = (props) => {
  return (
    <div className="flex items-center font-title">
      <p className="font-medium dark:text-white mr-5 capitalize">Hi, {props.userName}</p>
      <img
        src={props.src}
        alt={props.alt}
        className="w-16 h-16 object-cover rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500"
      />
    </div>
  );
};

export default Avatar;
