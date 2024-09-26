const getUserDetailsFromToken = require("../helper/getUserDetailsFromToken");
const userModel = require("../models/userModel");

async function updateUserDetails(request, response) {
  try {
    const token = request.cookies.token || "";
    const user = await getUserDetailsFromToken(token);

    const { name, profile_pic } = request.body;

    const updateUser = await userModel.updateOne(
      { _id: user._id },
      {
        name,
        profile_pic,
      }
    );

    const userInformation = await userModel.findById(user._id);
    return response.status(201).json({
      message: "User Update Successfully !",
      data: userInformation,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}
module.exports = updateUserDetails;
