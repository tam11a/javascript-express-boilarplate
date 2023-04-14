const express = require("express");
const router = express.Router();

router.use(
	"/authentication",
	require("./authentication")
	// #swagger.tags = ['Authentication']
);

module.exports = router;
