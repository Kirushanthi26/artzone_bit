const express = require("express");

const router = express.Router();
const authController = require("../controller/auth-controller")

const imageUpload = require('../middleware/file-upload')

router.post("/", authController.signIn);

router.post("/register", imageUpload.single('profilePicture'), authController.registerAccount);

module.exports = router;