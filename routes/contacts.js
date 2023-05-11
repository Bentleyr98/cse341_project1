const express = require('express');
const router = new express.Router();

const baseController = require("../controllers/index.js");

//view all contact
router.get("/", baseController.getAllContacts);

//get one contact
router.get("/:id", baseController.getContact);

//create a contact
router.post('/', baseController.createContact);

//update a contact
router.put('/:id', baseController.updateContact);

//delete a contact
router.delete('/:id', baseController.deleteContact);

module.exports = router;