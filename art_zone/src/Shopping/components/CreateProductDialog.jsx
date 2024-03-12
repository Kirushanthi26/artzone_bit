import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import axios from 'axios';
//import { useParams } from "react-router-dom";


const CreateProductDialog = ({ handleClose, open, userID, setPageCreateReload }) => {

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [productDescription, setProductDescription] = useState('');
  //const [productActive, setProductActive] = useState(1);
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const formData = new FormData();
      formData.append('product_name', productName);
      formData.append('product_price', productPrice);
      formData.append('product_image', productImage);
      formData.append('product_description', productDescription);
      formData.append('product_active', 1);

      const response = await axios.post(
        `http://localhost:5000/shops/${userID}/new`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + token
          },
        }
      );
      console.log(response.data);
      setPageCreateReload(true)
      // Reset form fields
      setProductName('');
      setProductPrice('');
      setProductImage('');
      setProductDescription('');
      //setProductActive(true);
      setError('');
      handleClose();
    } catch (err) {
      console.error(err);
      setError('An error occurred while creating the product.');
    }
  };
  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
  };


  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="md"
    >
      <DialogTitle id="alert-dialog-title">Create Product</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className=" font-title font-bold">Product Name:</label>
          <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label className=" font-title font-bold">Product Price:</label>
          <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label className=" font-title font-bold">Product Image URL:</label>
          <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            onChange={handleImageUpload}
            required
          />
        </div>
        <div className="mb-5">
          <label className=" font-title font-bold">Product Description:</label>
          <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />
        </div>
        {/* <div className="mb-5">
          <input
            type="checkbox"
            checked={productActive}
            value="1"
            onChange={(e) => setProductActive(e.target.checked)}
            hidden
          />
        </div> */}
        <Button onClick={handleClose} sx={{marginRight:"10px"}} color="error" variant="contained">
          Close
        </Button>
        <Button type="submit" variant="contained">
          Create
        </Button>
        </form>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ padding: "20px" }}>
      </DialogActions>
    </Dialog>
  );
};

export default CreateProductDialog;

