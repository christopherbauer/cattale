import express, { json } from "express";
import { errorHandler, logger, requestLogHandler } from "@cattale/server";
import { accountRouter } from "./src/routes";
const app = express();
app.use(requestLogHandler);
app.get("/", json(), (_request, response) => {
	response.status(200).send({
		live: true,
	});
});

app.use("/account", accountRouter);

app.all("*", (_request, _result) => {
	throw new Error("Route not found");
});
app.use(errorHandler);

const start = () => {
	const port = Number(process.env.PORT || 3001);
	app.listen(port, () => {
		logger.info(`⚡ Server running on port ${port}`);
	});
};

start();
