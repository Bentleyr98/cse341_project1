// run "npm run swagger-autogen" to impliment

const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'This is to test routes for our contacts API',
  },
  host: 'csecontacts.onrender.com/',
  schemes: ['http', 'https'],
};

const outputFile = './tests/swagger.json';
const endpointsFiles = ['./routes/contacts.js', './routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);