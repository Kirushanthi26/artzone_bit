import React from "react";
import ShopItem from "./ShopItem";

const ShopsList = (props) => {
  if (props.shopsList.length === 0) {
    return (
      <>
        <h1 className="text-2xl font-semibold font-title text-center text-red-600 my-8">
          No Shops Found...
        </h1>
      </>
    );
  }
  return (
    <ul className="my-8">
      {props.shopsList.map((shop) => (
        <ShopItem
          key={shop.uid}
          id={shop.uid}
          shopProfileImg={shop.avatar}
          shopName = {shop.name}
          shopAddress= {shop.address}
          phoneNo={shop.phone_no}
        />
      ))}
    </ul>
  );
};

export default ShopsList;
