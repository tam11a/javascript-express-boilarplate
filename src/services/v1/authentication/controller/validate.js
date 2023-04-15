const ErrorResponse = require("../../../../utilities/error/error.response");

module.exports = async (req, res, next) => {
	try {
		if (!req.user) return next(new ErrorResponse("No user found!", 404));

		res.status(200).json({
			success: true,
			message: "User is authenticated.",
			data: {},
		});
	} catch (error) {
		// Send Error Response
		next(error);
	}
};
