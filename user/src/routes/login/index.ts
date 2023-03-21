import express from "express";

const loginRouter = express.Router();
loginRouter.post("/", (request, response) => {
	//findOrCreate based on the https://auth0.com/docs/secure/tokens sub field
	//should always return 200 or 201 created to confirm a new user account exists
	//emit an event to have the user account created in the tagging service?
	response.status(200).send();
});

export default loginRouter;
