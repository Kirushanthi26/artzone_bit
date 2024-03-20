import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Divider } from "@mui/material";

const ViewOrderDetails = () => {
  const navigate = useNavigate();

  return (
    <>
      <span className='mr-8 text-3xl font-title font-medium'>Order Summary </span>
      <Button
        variant="contained"
        color="secondary"
          onClick={() => {
            navigate(-1);
          }}
          sx={{marginBottom:"16px"}}
        >
          Go Back
        </Button>
        <Divider/>
    </>
  )
}

export default ViewOrderDetails
