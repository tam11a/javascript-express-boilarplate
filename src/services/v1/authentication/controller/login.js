const ErrorResponse = require("../../../../utilities/error/error.response");

module.exports = async (req, res, next) => {
	/* 	#swagger.description = 'Endpoint to sign in a specific user' */
	const { email, password } = req.body;

	/* #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: { $ref: "#/definitions/Sign" },
            }
        }
    }
  */

	if (!email || !password)
		return next(ErrorResponse("Please provide email and password", 400));

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
