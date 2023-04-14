const { PORT } = require("./configuration");
const app = require("./app");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");

// Redirect to the Documentation
app.get("/", function (req, res) {
	res.redirect("/doc");
});

// Swagger UI
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
