import React from "react";
import { allProduct } from "../../shared/data/all_products";
import ProductItem from "./ProductItem";

const ProductList = ({productData, setPageUpdateReload, setPageDeleteReload}) => {
  console.log(productData)

  return (
    <ul className="my-8">
      {productData.map((product) => (
          <ProductItem
            key={product.pid}
            id={product.pid}
            productName={product.product_name}
            productPrice={product.product_price}
            productImg={product.product_image}
            productDescription={product.product_description}
            setPageUpdateReload={setPageUpdateReload}
            setPageDeleteReload={setPageDeleteReload}
          />
        ))}
    </ul>
  );
};

export default ProductList;
