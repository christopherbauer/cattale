import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (
	error,
	_request,
	response,
	next
) => {
	console.error(error);
	response.status(400).send({
		errors: [{ message: error }],
	});
	next();
};
