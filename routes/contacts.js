const router = require('express').Router();
const baseController = require("../controllers/index.js");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

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