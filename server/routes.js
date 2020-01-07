const router = require('express').Router();
const getAPIResponse = require('./controller.js');

router.get('/getAPIResponse', getAPIResponse.getResponse);

module.exports = router;
