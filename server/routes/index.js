const express = require("express");
const registerUser = require("../controller/registerUser");
const checkEmail = require("../controller/checkEmail");
const checkPassword = require("../controller/checkPassword");
const userDetails = require("../controller/userDetails");

const router = express.Router();

// create user router api
router.post("/register", registerUser);
// verify email
router.get("/email", checkEmail);
// verify password
router.post("/password", checkPassword);
// get user details
router.get("/user-details", userDetails);

module.exports = router;
