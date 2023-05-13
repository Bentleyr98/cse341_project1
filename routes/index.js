const express = require('express');
const router = new express.Router();

const baseController = require("../controllers/index.js")

router.get("/", baseController.sendName)
router.use("/contacts", require("./contacts"))


module.exports = router;