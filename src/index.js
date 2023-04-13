const app = require("./app");
const { PORT } = require("./configuration");

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
