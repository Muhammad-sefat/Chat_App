const userModel = require("../models/userModel");

async function checkEmail(request, response) {
  try {
    const { email } = request.body;

    // check email
    const checkEmail = await userModel.findOne({ email }).select("-password");

    if (!checkEmail) {
      response.status(400).json({
        message: "User Not Exits in database",
        error: true,
      });
    }

    return response.status(201).json({
      message: "Email Verify !",
      data: checkEmail,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}
module.exports = checkEmail;
