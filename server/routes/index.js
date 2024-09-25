const express = require("express");
const registerUser = require("../controller/registerUser");
const checkEmail = require("../controller/checkEmail");

const router = express.Router();

// create user router api
router.post("/register", registerUser);
// verify email
router.get("/email", checkEmail);

module.exports = router;
