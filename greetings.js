'use strict';

const Router = require('claudiaexpress').Router;
const router = Router();

function sendGreeting() {
  return (req, res) => {
    res.end(req.myGreeting);
  }
}

router.get('/hu', (req, res, next) => {
  req.myGreeting = 'Szia!';
  next();
}, sendGreeting());

router.get('/en', (req, res, next) => {
  req.myGreeting = 'Hello!';
  next();
}, sendGreeting());

module.exports = router;
