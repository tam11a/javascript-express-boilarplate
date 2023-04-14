const express = require("express");
const app = express();
const cors = require("cors");
const errorMiddleware = require("./utilities/error/error.middleware");

// REST API
app.use(express.json());

// CORS Permission
app.use(
	cors({
		origin: "*",
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		preflightContinue: false,
		optionsSuccessStatus: 204,
	})
);

// API Routes
app.use(
	"/api",
	require("./services")
	// #swagger.security = null
);

// Middleware Error Handler
app.use(errorMiddleware);

module.exports = app;
