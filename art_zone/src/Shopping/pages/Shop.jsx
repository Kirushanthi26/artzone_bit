import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { useParams } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import axios from "axios";
import { useAuthStore } from "../../shared/store/useAuthStore";

const Shop = () => {

  const [shopData, setShopData] = useState(null);
  const [productData, setProductData] = useState([]);
  const { shopId } = useParams();
  const { userId } = useAuthStore();



  useEffect(() => {
    const fetchShopData = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await axios.get(`http://localhost:5000/shops/${shopId}`, {
          headers: {
            Authorization: 'Bearer ' + token
          }
          });
        setShopData(response.data.shop);
        setProductData(response.data.products);
      } catch (err) {
        console.error(err);
      }
    }

    fetchShopData();
  }, []);

  if (!shopData) {
    return <div>Loading...</div>;
  }

  // if (productData.length === 0) {
  //   return <div>Shop not found</div>;
  // }

  return (
    <div className="m-8">
      <div className="flex mb-8">
        <img
          src={`http://localhost:5000/${shopData.avatar}`}
          alt="shop profile image"
          className="object-cover w-60 mr-24 rounded-lg"
        />
        <div>
          <h1 className="text-3xl capitalize font-title font-semibold my-5">
            {shopData.name}
          </h1>
          <h4 className="text-xl capitalize font-title font-normal">
            {shopData.address}
          </h4>
          <h4 className="text-xl font-title font-normal">
            {shopData.email}
          </h4>
          <h4 className="text-l capitalize font-title font-normal mb-8">
            {shopData.phone_no}
          </h4>
          {shopId == userId && <CreateProduct shopId={shopId}/>}
        </div>
      </div>
      <Divider />
      <div>
        {productData.length >0 && <ProductList productData={productData} />}
      </div>
    </div>
  );
};

export default Shop;
