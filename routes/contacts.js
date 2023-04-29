const express = require('express');
const router = new express.Router();

const baseController = require("../controllers/index.js")

router.get("/", baseController.getAllContacts)
router.get("/:id", baseController.getContact)

module.exports = router;