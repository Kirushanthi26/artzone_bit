import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShopsList from "../components/ShopsList";
import axios from "axios";

const Shops = () => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    const fetchShopData = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await axios.get(`http://localhost:5000/shops`, {
          headers: {
            Authorization: 'Bearer ' + token
          }
          });
        setShopData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchShopData();
  });

  return (
    <div>
      <h1 className="text-3xl font-title capitalize font-semibold">Shops</h1>
      <Divider />
      <ShopsList shopsList={shopData} />
    </div>
  );
};

export default Shops;
