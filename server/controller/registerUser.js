const userModel = require("../models/userModel");
const bcryptjs = require("bcryptjs");

async function registerUser(request, response) {
  try {
    const { name, email, password, profile_pic } = request.body;

    // check email
    const checkEmail = await userModel.findOne({ email });

    if (checkEmail) {
      response.status(400).json({
        message: "User Already Exits in database",
        error: true,
      });
    }

    // password into hashPassword
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const payload = {
      name,
      email,
      profile_pic,
      password: hashPassword,
    };
    const user = new userModel(payload);
    const saveData = await user.save();

    return response.status(201).json({
      message: "User Create Successfully !",
      data: saveData,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = registerUser;
