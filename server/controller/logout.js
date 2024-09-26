async function logout(request, response) {
  try {
    const cookieOptions = {
      http: true,
      secure: false,
    };

    return response.cookie("token", "", cookieOptions).status(201).json({
      message: "session out !",
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}
module.exports = logout;
