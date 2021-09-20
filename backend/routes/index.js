const express = require('express');
const router = express();

const LoginRoute = require('./login');
const RegisterRoute = require('./register');

router.post("/register", RegisterRoute);
router.get("/login", LoginRoute);

module.exports = router;