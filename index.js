'use strict';

const Router = require('claudiaexpress').Router;
const ApiBuilder = require('claudia-api-builder');
const api = new ApiBuilder();
const router = Router(api);

const greetings = require('./greetings');

router.get('ping', (req, res) => {
  return res.end();
});

router.use('greetings', greetings);

module.exports = router.bootstrap();
