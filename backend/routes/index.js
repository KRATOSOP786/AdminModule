const express = require('express');
const router = express.Router();
const loginRoute = require('../APIs/upm/login');

router.use('/login', loginRoute);

module.exports = router;