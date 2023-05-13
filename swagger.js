const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'This is to test routes for our Contacts API. Most routes will require an ID to view, edit, or delete specific contacts.',
  },
  host: 'csecontacts.onrender.com/',
  schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);