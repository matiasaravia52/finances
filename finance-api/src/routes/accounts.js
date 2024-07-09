var express = require('express');
const accountontroller = require('../controllers/AccountController');

var router = express.Router();

router.get('/', accountontroller.findAllAccounts);
router.post('/', accountontroller.createAccount);

module.exports = router;