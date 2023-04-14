const express = require("express");
const router = express.Router();
const schema = require("./authentication.schema");

router.route("/login", schema.login);

module.exports = router;
