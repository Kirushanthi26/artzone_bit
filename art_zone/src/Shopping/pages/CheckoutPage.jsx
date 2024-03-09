import { Button, Divider } from "@mui/material";
import React, { useState } from "react";
import OrderSummaryCard from "../components/OrderSummaryCard";
import ShippingForm from "../components/ShippingForm";
//import Payment from "../components/Payment";

const CheckoutPage = () => {

  return (
    <>
      <h1 className="text-4xl capitalize font-title font-semibold py-5">
        Your Order
      </h1>
      <Divider sx={{ marginBottom: "30px" }} />
      <div className="flex w-full">
        <div className="w-1/2 mr-16">
          <h1 className="text-2xl capitalize font-title font-semibold mb-5 text-center">
            1. Order Summary
          </h1>
          <OrderSummaryCard />
          <div className="my-8">
            {/* <h1 className="text-2xl capitalize font-title font-semibold text-center mb-5">
              2. Shipping Address
            </h1>
            <ShippingForm /> */}
          </div>
        </div>
        <Divider orientation="vertical" variant="fullWidth" flexItem />
         <div className="w-1/2 ml-16">
         <h1 className="text-2xl capitalize font-title font-semibold text-center mb-5">
              2. Shipping Address
            </h1>
            <ShippingForm />
          {/* <h1 className="text-2xl capitalize font-title font-semibold mb-5 text-center">
            3. Payment details
          </h1>
          <Payment />
          <div className="my-8">
            <Button type="submit" variant="contained" size="large">Order Confirm</Button>
          </div> */}
        </div> 
      </div>
    </>
  );
};

export default CheckoutPage;
