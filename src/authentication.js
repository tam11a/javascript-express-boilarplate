const jwt = require("jsonwebtoken");
const { Users } = require("./database");
const ErrorResponse = require("./utilities/error/error.response");

exports.protect = async (req, _res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		token = req.headers.authorization.split(" ")[1];
	}

	if (!token) return next(new ErrorResponse("Unauthorized user!", 401));

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		if (!decoded.id) return next(new ErrorResponse("Unauthorized user!", 401));

		const user = await Users.findByPk(decoded.id);
		if (!user) return next(new ErrorResponse("Unauthorized user!", 401));

		req.user = user;

		req.createdBy = {
			createdBy: user._id,
		};

		req.updatedBy = {
			updatedBy: user._id,
		};

		next();
	} catch (error) {
		// error
		return next(new ErrorResponse("Unauthorized user!", 401));
	}
};
