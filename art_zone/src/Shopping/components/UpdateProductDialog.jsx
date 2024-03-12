import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import axios from 'axios';

const UpdateProductDialog = ({ handleClose, open, pid, productNameProps, productPriceProps, productDescriptionProps,setPageUpdateReload }) => {
  const [productName, setProductName] = useState(productNameProps);
  const [productPrice, setProductPrice] = useState(productPriceProps);
  const [productImage, setProductImage] = useState(null);
  const [productDescription, setProductDescription] = useState(productDescriptionProps);
  const [error, setError] = useState('');


  useEffect(() => {
    setProductName(productNameProps);
    setProductPrice(productPriceProps);
    setProductDescription(productDescriptionProps);
  }, [productNameProps, productPriceProps, productDescriptionProps]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const formData = new FormData();
      formData.append('product_name', productName);
      formData.append('product_price', productPrice);
      formData.append('product_image', productImage);
      formData.append('product_description', productDescription);

      const response = await axios.patch(
        `http://localhost:5000/shops/${pid}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + token
          },
        }
      );
      console.log(response.data);
      setPageUpdateReload(true)
      setError('');
      handleClose();
    } catch (err) {
      console.error(err);
      setError('An error occurred while updating the product.');
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
      <DialogTitle id="alert-dialog-title">Update Product</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="font-title font-bold">Product Name:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label className="font-title font-bold">Product Price:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label className="font-title font-bold">Product Image:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                onChange={handleImageUpload}
              />
            </div>
            <div className="mb-5">
              <label className="font-title font-bold">Product Description:</label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                required
              />
            </div>
            <Button onClick={handleClose} sx={{ marginRight: "10px" }} color="error" variant="contained">
              Close
            </Button>
            <Button type="submit" variant="contained">
              Update
            </Button>
          </form>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ padding: "20px" }}>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateProductDialog;
