const express = require("express");

const router = express.Router();
const eventController = require("../controller/event-controller")

const checkAuth = require('../middleware/check-auth')

router.use(checkAuth)

router.get("/", eventController.getAllEvents);

module.exports = router;