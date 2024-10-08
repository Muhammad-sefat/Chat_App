const express = require("express");
const registerUser = require("../controller/registerUser");
const checkEmail = require("../controller/checkEmail");
const checkPassword = require("../controller/checkPassword");
const userDetails = require("../controller/userDetails");
const logout = require("../controller/logout");
const updateUserDetails = require("../controller/updateUserDetails");

const router = express.Router();

// create user router api
router.post("/register", registerUser);
// verify email
router.get("/email", checkEmail);
// verify password
router.post("/password", checkPassword);
// get user details
router.get("/user-details", userDetails);
// logout user
router.get("/logout", logout);
// update user details
router.post("/update-user", updateUserDetails);

module.exports = router;
