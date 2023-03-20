import { RequestHandler } from "express";
import logger from "../logger";

export const requestLogHandler: RequestHandler = (request, _response, next) => {
	let { method, path } = request;

	console.log(`BEGIN REQUEST: ${method} ${path}`);
	var loggerData = JSON.parse(
		JSON.stringify({
			method: request.method,
			path: request.path,
			body: request.body,
			headers: request.headers,
			ip: request.connection.remoteAddress,
		})
	);
	logger.debug(loggerData);

	next();
};
