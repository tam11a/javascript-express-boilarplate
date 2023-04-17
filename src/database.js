const Sequelize = require("sequelize");
const { DB } = require("./configuration");

const Connection = new Sequelize(DB);

const db = {
	Sequelize,
	Connection,
};

db.Users = require("./services/v1/authentication/authentication.model")(
	Connection,
	Sequelize
);

module.exports = db;