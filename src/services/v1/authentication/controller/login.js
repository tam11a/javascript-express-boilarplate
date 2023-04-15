const ErrorResponse = require("../../../../utilities/error/error.response");

module.exports = async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password)
		return next(new ErrorResponse("Please provide email and password", 400));

	try {
		res.status(200).json({
			success: true,
			token: "TOKEN_HERE", // otp._id,
			message: "Welcome Ibrahim Sadik Tamim!",
		});
	} catch (error) {
		// Send Error Response
		next(error);
	}
};
