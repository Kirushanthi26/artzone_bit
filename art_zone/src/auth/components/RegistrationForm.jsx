import React, { useState } from "react";
import { Card } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const registrationFormSchema = yup.object().shape({
  username: yup.string().required().min(2),
  userPhoneNo: yup
    .string()
    .required("Phone number is a required field.")
    .matches(phoneRegExp, "Phone number is not valid")
    .max(10)
    .min(10),
  userAddress: yup.string().min(5, "Please enter a valid address.").required(),
  userEmail: yup.string().email().required(),
  userBio: yup.string().required(),
  userPassword: yup.string().required().min(3).max(10),
  userConfirmPassword: yup
    .string()
    .oneOf([yup.ref("userPassword"), null], "Passwords must match")
    .required("Password confirm is required"),
  userRole: yup.string().required("Role is required"),
  profilePicture: yup.mixed().required("Profile picture is required"),
});

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [responseData, setResponseData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(registrationFormSchema),
  });

  const onSubmit = async (data) => {
    //console.log(data);
    try {
      const { profilePicture, userRole, ...formData } = data;
      const formDataToSend = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      formDataToSend.append("profilePicture", profilePicture[0]);
      formDataToSend.append("userRole", Number(userRole));

      const response = await axios.post(
        "http://localhost:5000/register",
        formDataToSend
      );

      setResponseData(response.data);
      //reset();
    } catch (error) {
      setResponseData("Error registering user:", error);
    }
    reset();
  };

  return (
    <Card sx={{ padding: "25px", width: "50%", margin: "40px" }}>
      <h1 className=" font-title font-semibold uppercase text-center tracking-widest text-yellow-500 text-3xl mb-8">
        ArtZone Registration form
      </h1>

      {responseData && (
        <div>
          <p className="p-5 font-title text-lg font-semibold bg-green-700 text-white text-center">
            {JSON.stringify(responseData, null, 2)} 
          </p>
          <p className="p-5 font-title text-lg font-semibold bg-green-700 text-white text-center">
            Please, Go to the Login page..
          </p>
        </div>
      )}

      <form className="m-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label className="font-title font-bold">Name</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register("username")}
          />
          <p className="font-bold text-red-600 font-title">
            {errors.username?.message}
          </p>
        </div>

        <div className="mb-5">
          <label className="font-title font-bold">Phone Number</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="tel"
            {...register("userPhoneNo")}
          />
          <p className="font-bold text-red-600 font-title">
            {errors.userPhoneNo?.message}
          </p>
        </div>

        <div className="mb-5">
          <label className="font-title font-bold">Address</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={3}
            {...register("userAddress")}
          ></textarea>
          <p className="font-bold text-red-600 font-title">
            {errors.userAddress?.message}
          </p>
        </div>

        <div className="mb-5">
          <label className="font-title font-bold">Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            {...register("userEmail")}
          />
          <p className="font-bold text-red-600 font-title">
            {errors.userEmail?.message}
          </p>
        </div>

        <div className="mb-5">
          <label className="font-title font-bold">Role</label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("userRole")}
          >
            <option value="">Please Select the Role</option>
            <option value="1">Artist</option>
            <option value="2">Buyer</option>
            <option value="3">Shop</option>
          </select>
          <p className="font-bold text-red-600 font-title">
            {errors.userRole?.message}
          </p>
        </div>

        <div className="mb-5">
          <label className="font-title font-bold">Profile Picture</label>
          <input
            type="file"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("profilePicture")}
          />
          <p className="font-bold text-red-600 font-title">
            {errors.profilePicture?.message}
          </p>
        </div>

        <div className="mb-5">
          <label className="font-title font-bold">Bio</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={3}
            {...register("userBio")}
          ></textarea>
          <p className="font-bold text-red-600 font-title">
            {errors.userBio?.message}
          </p>
        </div>

        <div className="mb-5">
          <label className="font-title font-bold">Password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            {...register("userPassword")}
          />
          <p className="font-bold text-red-600 font-title">
            {errors.userPassword?.message}
          </p>
        </div>

        <div className="mb-5">
          <label className="font-title font-bold">Confirm Password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            {...register("userConfirmPassword")}
          />
          <p className="font-bold text-red-600 font-title">
            {errors.userConfirmPassword?.message}
          </p>
        </div>

        <button
          className="bg-yellow-400 mr-8 capitalize font-title font-medium py-4 px-8 rounded-full hover:bg-yellow-500 hover:shadow-md"
          type="submit"
        >
          Register
        </button>
        <button
          className="bg-yellow-400 capitalize font-title font-medium py-4 px-8 rounded-full hover:bg-yellow-500 hover:shadow-md"
          type="submit"
          onClick={() => {
            navigate(-1);
          }}
        >
          Login page
        </button>
      </form>
    </Card>
  );
};

export default RegistrationForm;
