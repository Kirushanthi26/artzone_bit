import { Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useCartStore } from "../../shared/store/useCartStore";
import { useParams } from "react-router-dom";
import SendEmail from "./SendEmail";
//import { useAuthStore } from "../../shared/store/useAuthStore";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const shippingFormSchema = yup
  .object()
  .shape({
    username: yup.string().required().min(2),
    userPhoneNo: yup
      .string()
      .required("Phone number is a required field.")
      .matches(phoneRegExp, "Phone number is not valid")
      .max(10)
      .min(10),
    userAddress: yup
      .string()
      .min(5, "Please enter a valid address.")
      .required(),
    userEmail: yup.string().email().required(),
    userPayment: yup
      .string()
      .required("A radio option is required")
      .oneOf(["1", "2"], "A radio option is required"),
  })
  .required();

const ShippingForm = () => {
  const { items } = useCartStore();
  let { userID } = useParams();
  const [submitted, setSubmitted] = useState(false);
  //const {userId} = useAuthStore()
  const [toEmail , setToMail] = useState(null)

  console.log(toEmail)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shippingFormSchema),
  });

  const onSubmit = async (data) => {
    //console.log(userID, data, items, userId);
    
    setToMail(data.userEmail)
    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(
        "http://localhost:5000/shops/checkout",
        {
          userID:userID,
          data,
          items
        },
        {
          headers: {
            'Content-Type': 'application/json', 
            Authorization: 'Bearer ' + token
          },
        }
      );

      if (response.status === 200) {
        setSubmitted(true);
        useCartStore.setState({ items: [] });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    //console.log(data, items);
  };

  return (
    <>
    <SendEmail toEmail={toEmail}/>
    <Card>
      {submitted ? (
        <div className="bg-green-500 text-white p-4 text-center capitalize text-2xl font-semibold">
          Order placed successfully.... <br /> 
          Go to the <span className="text-3xl font-semibold font-title text-indigo-950">shopping page </span>for more items.
        </div>
      ) : (
        <CardContent>
          <form className="m-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label className=" font-title font-bold">Name</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                {...register("username")}
              />
              <p className=" font-bold text-red-600 font-title">
                {errors.username?.message}
              </p>
            </div>

            <div className="mb-5">
              <label className=" font-title font-bold">Phone Number</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="tel"
                {...register("userPhoneNo")}
              />
              <p className=" font-bold text-red-600 font-title">
                {errors.userPhoneNo?.message}
              </p>
            </div>

            <div className="mb-5">
              <label className=" font-title font-bold">Email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                {...register("userEmail")}
              />
              <p className=" font-bold text-red-600 font-title">
                {errors.userEmail?.message}
              </p>
            </div>

            <div className="mb-5">
              <label className=" font-title font-bold">Address</label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={3}
                {...register("userAddress")}
              ></textarea>
              <p className=" font-bold text-red-600 font-title">
                {errors.userAddress?.message}
              </p>
            </div>

            <div className="flex items-center mb-5">
              <input
                id="default-radio-1"
                type="radio"
                {...register("userPayment")}
                value="1"
                name="userPayment"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                required
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                Cash On Delivery
              </label>
              <p className=" font-bold text-red-600 font-title">
                {errors.userPayment?.message}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <input
                id="default-radio-2"
                type="radio"
                {...register("userPayment")}
                value="2"
                name="userPayment"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="default-radio-2"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                Online Payment
              </label>
              <p className=" font-bold text-red-600 font-title">
                {errors.userPayment?.message}
              </p>
            </div>

            {items.length > 0 && (
              <button
                className="bg-yellow-400 capitalize font-title font-medium py-4 px-8 rounded-full hover:bg-yellow-500 hover:shadow-md"
                type="submit"
              >
                Confirm Shopping
              </button>
            )}
          </form>
        </CardContent>
      )}
    </Card>
    </>
  );
};

export default ShippingForm;
