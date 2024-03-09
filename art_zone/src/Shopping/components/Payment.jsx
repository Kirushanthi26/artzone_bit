import { Card, CardContent } from "@mui/material";
import React from "react";

const Payment = () => {
  return (
    <Card className="p-8">
      <CardContent>
        <div class="flex items-center mb-4">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            required
          />
          <label
            for="default-radio-1"
            className="ms-2 text-sm font-medium text-gray-900"
          >
            Cash On Delivery
          </label>
        </div>
      </CardContent>
    </Card>
  );
};

export default Payment;
