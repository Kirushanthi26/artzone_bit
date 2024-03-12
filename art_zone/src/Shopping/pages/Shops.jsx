import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShopsList from "../components/ShopsList";
import axios from "axios";
import { useAuthStore } from "../../shared/store/useAuthStore";
import ShopItem from "../components/ShopItem";

const Shops = () => {
  const [shopData, setShopData] = useState([]);
  const { userId, roleNo } = useAuthStore();

  useEffect(() => {
    const fetchShopData = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(`http://localhost:5000/shops`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setShopData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchShopData();
  }, []);

  return (
    <div>
      {roleNo === 3 && (
        <>
          <h1 className="text-3xl font-title capitalize font-semibold mb-3">
            My Shop
          </h1>
          <Divider />
          {shopData
            .filter((shop) => shop.uid === userId)
            .map((shop) => (
              <ShopItem
                key={shop.uid}
                id={shop.uid}
                shopProfileImg={shop.avatar}
                shopName={shop.name}
                shopAddress={shop.address}
                phoneNo={shop.phone_no}
              />
            ))}
        </>
      )}

      <br />
      <h1 className="text-3xl font-title capitalize font-semibold">Shops</h1>
      <Divider />
      <ShopsList shopsList={shopData} />
    </div>
  );
};

export default Shops;
