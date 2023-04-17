const ErrorResponse = require("../../../../utilities/error/error.response");

module.exports = async (req, res, next) => {
	const { username, firstName, lastName, gender, email, password } = req.body;

	if (!email || !password)
		return next(new ErrorResponse("Please provide email and password", 400));

	try {
		res.status(201).json({
			success: true,
			message: "Account created successfully!",
		});
	} catch (error) {
		// Send Error Response
		next(error);
	}
};
