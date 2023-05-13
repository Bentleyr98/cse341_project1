const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const baseController = require("../controllers/index.js")

router.get("/", baseController.sendName)
router.use("/contacts", require("./contacts"))
// router.use("/api-docs",  require('./swagger'))


// router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));


module.exports = router;