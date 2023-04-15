const ErrorResponse = require("./error.response");

module.exports = (err, _req, res, _next) => {
	let error = { ...err };
	error.message = err.message;
	// console.log(err);
	if (err.code === 11000)
		error = new ErrorResponse(
			`${Object.keys(err.keyValue)[0] || ""} already exists`,
			400
		);
	if (err.name === "ValidationError") {
		const message = Object.values(err.errors)[0].message;
		error = new ErrorResponse(message, 400);
	}
	return res.status(error.statusCode || 500).json({
		success: false,
		message: error.message || "Server Error",
	});
};
