const userModel = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function checkPassword(request, response) {
  try {
    const { password, userId } = request.body;

    const user = await userModel.findOne({ _id: userId });

    const verifyPassword = await bcryptjs.compare(password, user.password);

    if (!verifyPassword) {
      response.status(400).json({
        message: "Please Check Password",
        error: true,
      });
    }

    const tokenData = {
      id: user._id,
      email: user.email,
    };

    const cookieOptions = {
      http: true,
      secure: false,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return response.cookie("token", token, cookieOptions).status(201).json({
      message: "User Login Successfully !",
      data: token,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}
module.exports = checkPassword;
