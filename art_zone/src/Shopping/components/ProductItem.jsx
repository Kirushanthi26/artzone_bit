import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { currencyFormatter } from "../../shared/utils/formatting";
import { useCartStore } from "../../shared/store/useCartStore";
import UpdateProduct from "../pages/UpdateProduct";
import DeleteProduct from "./DeleteProduct";
import { useParams } from "react-router-dom";
import { useAuthStore } from "../../shared/store/useAuthStore";

const ProductItem = ({
  id,
  productName,
  productPrice,
  productImg,
  productDescription,
}) => {
  const { addItem } = useCartStore();
  const { shopId } = useParams();
  const { userId } = useAuthStore();
console.log(shopId, userId)

  const handleAddItemToCart = () => {
    addItem({ id: id, name: productName, price: productPrice, quantity: 1 });
  };

  return (
    <li className="inline-block mx-5 mb-8">
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          image={`http://localhost:5000/${productImg}`}
          alt={productName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productName}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ fontSize: "16px", fontWeight: 300 }}
          >
            {productDescription}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ fontSize: "20px", fontWeight: 500 }}
          >
            {currencyFormatter.format(productPrice)}
          </Typography>
        </CardContent>
        <CardContent>
          {shopId == userId && (
            <UpdateProduct
              pid={id}
              productNameProps={productName}
              productPriceProps={productPrice}
              productDescriptionProps={productDescription}
            />
          )}
          {shopId == userId && <DeleteProduct pid={id} />}
        </CardContent>
        <CardActions>
          <Button
            size="medium"
            variant="contained"
            sx={{ width: "100%", marginBottom: "10px" }}
            onClick={handleAddItemToCart}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </li>
  );
};

export default ProductItem;
