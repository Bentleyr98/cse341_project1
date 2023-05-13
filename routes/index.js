const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const baseController = require("../controllers/index.js")

router.get("/", baseController.sendName);
router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));


module.exports = router;