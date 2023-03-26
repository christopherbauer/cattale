import express from "express";
import { auth, requiredScopes } from "express-oauth2-jwt-bearer";
const checkJwt = auth({
	audience: "{yourApiIdentifier}",
	issuerBaseURL: `https://{yourDomain}/`,
});
const accountRouter = express.Router();
const scopes = requiredScopes(["read:account", "write:account"]);
accountRouter
	.route("/login")
	.all(checkJwt, scopes)
	.get((request, response) => {
		const { auth } = request;
		if (auth) {
			const { payload } = auth;
			response.status(200).send(payload);
			return;
		}
		response.status(401).send();
	})
	.post((request, response) => {
		//findOrCreate based on the https://auth0.com/docs/secure/tokens sub field
		//should always return 200 or 201 created to confirm a new user account exists
		//emit an event to have the user account created in the tagging service?
		response.status(200).send();
	});

export default accountRouter;
