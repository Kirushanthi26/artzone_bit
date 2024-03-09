import React, { useState } from "react";
import { Card } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from "../../shared/store/useAuthStore";

const loginFormSchema = yup
  .object()
  .shape({
    userEmail: yup.string().email().required(),
    userPassword: yup.string().required().min(3).max(10),
  })
  .required();

const LoginForm = () => {
  const navigateTo = useNavigate();
const [responseMgs, setResponseMgs] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("http://localhost:5000/", data); 
      
      const { token, userId, roleNo } = response.data;
      localStorage.setItem("token", token);
      useAuthStore.getState().login(token, userId, roleNo);

      if (roleNo === 1) {
        navigateTo("/u1/profile");
      } else if (roleNo === 2) {
        navigateTo("/u1/profile");
      }else if (roleNo === 3) {
        navigateTo("/shops");
      }else{
        console.log("something wrong")
      }

      reset()
    } catch (error) {
      setResponseMgs("Error logging in:", error);
    }
  };

  return (
    <Card sx={{ padding: "25px", width: "50%", margin: "40px" }}>
      <h1 className=" font-title font-semibold text-center tracking-widest text-yellow-500 text-3xl mb-8">ArtZone</h1>
      
      {responseMgs && (
        <div>
          <p className="p-5 font-title text-lg font-semibold bg-green-700 text-white text-center">
            {JSON.stringify(responseMgs, null, 2)} 
          </p>
        </div>
      )}
      
      <form className="m-8" onSubmit={handleSubmit(onSubmit)}>
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
          <label className=" font-title font-bold">Password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            {...register("userPassword")}
          />
          <p className=" font-bold text-red-600 font-title">
            {errors.userPassword?.message}
          </p>
        </div>

        <button
          className="bg-yellow-400 capitalize mr-8 font-title font-medium py-4 px-8 rounded-full hover:bg-yellow-500 hover:shadow-md"
          type="submit"
        >
          Login
        </button>
        <Link to="/register">
          <button
            className="bg-yellow-400 capitalize font-title font-medium py-4 px-8 rounded-full hover:bg-yellow-500 hover:shadow-md"
            type="button"
          >
            Register
          </button>
        </Link>
      </form>
    </Card>
  );
};

export default LoginForm;
