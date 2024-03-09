import { Card, CardContent } from "@mui/material";
import React from "react";
import { useCartStore } from "../../shared/store/useCartStore";
import { currencyFormatter } from "../../shared/utils/formatting";

const OrderSummaryCard = () => {
  const { items } = useCartStore();
  const totalPrice = useCartStore((state) => state.getTotalPrice(state.items));

  if (items.length === 0) {
    return (
      <Card>
        <CardContent>
          <p>no items on the cart</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
                <span className=" font-medium mr-16 font-title">
                  {item.name}
                </span>
                <span className="font-medium font-title">
                  {item.quantity} x {currencyFormatter.format(item.price)}
                </span>
            </li>
          ))}
          <li className="mt-8 text-3xl font-title font-semibold text-end">Total: {currencyFormatter.format(totalPrice)}</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default OrderSummaryCard;
