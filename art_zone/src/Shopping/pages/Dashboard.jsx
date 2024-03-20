import React from "react";
import Charts from "../components/Charts";
import OrderTable from "../components/OrderTable";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex">
        <div className="w-11/12">
          <h1 className="h1 text-center text-3xl underline text-yellow-500 font-semibold">
            Dashboard
          </h1>
        </div>
        <div >
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              navigate(-1);
            }}
            sx={{ marginBottom: "16px" }}
          >
            Go Back
          </Button>
        </div>
      </div>
      <div className="mt-8 p-5">
        <Charts />
      </div>
      <div className="mt-8 p-5">
        <OrderTable />
      </div>
    </div>
  );
};

export default Dashboard;
