const express = require("express");

const router = express.Router();
const shoppingController = require("../controller/shopping-controller")

const imageUpload = require('../middleware/file-upload')
const checkAuth = require('../middleware/check-auth')

router.use(checkAuth)

router.get("/", shoppingController.getAllShops);

router.get("/:uid", shoppingController.getShopAndProductsByShopId);

router.post("/:uid/new", imageUpload.single('product_image'), shoppingController.createProduct);

router.patch("/:pid", imageUpload.single('product_image'), shoppingController.updateProduct);

router.delete("/:pid", shoppingController.deleteProduct);

router.post("/checkout", shoppingController.finalCheckout);

module.exports = router;
