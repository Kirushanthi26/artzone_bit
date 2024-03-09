import React from "react";
import MainNavigation from "../components/Navigation/MainNavigation";
import error404 from "../../assets/404.png";
import { useNavigate } from "react-router-dom";
//import Button from "../components/UIElements/Button";
import { Button } from "@mui/material";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainNavigation />
      <main className="flex flex-col items-center justify-center m-8 p-20 bg-red-200 relative">
        <img src={error404} alt="error" />
        <p className="text-3xl text-neutral-800 font-mdium my-10">
          We couldn't find the content you were looking for, Go Back to the
          Previous Page
        </p>

        <Button
        variant="contained"
        color="error"
          onClick={() => {
            navigate(-1);
          }}
        >
          Previous Page
        </Button>
      </main>
    </>
  );
};

export default ErrorPage;
