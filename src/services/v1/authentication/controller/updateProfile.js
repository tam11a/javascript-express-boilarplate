const { Users } = require("../../../../database");
const ErrorResponse = require("../../../../utilities/error/error.response");

module.exports = async (req, res, next) => {
    if (req.user) {
        // Get Values
        const {
            username,
            firstName,
            lastName,
            email,
        } = req.body;
        try {
            const user = await Users.findByPk(req.user.id)
            if (!user) {
                
            }
            await user.update({
                username,
                firstName,
                lastName,
                email,
            })
            res.status(201).json({
                success: true,
                message: "Informations updated sucessfully",
            });
            // On Error
        } catch (error) {
            // Send Error Response
            next(error);
        }
    } else {
        next(ErrorResponse("No user found!", 404));
    }
};