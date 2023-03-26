import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import { Api, CONSTANTS, Urls } from "./lib";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const theme = extendTheme({
	config: {
		cssVarPrefix: "ck",
	},
});
console.log(CONSTANTS);
root.render(
	<React.StrictMode>
		<Auth0Provider
			domain={CONSTANTS.AUTH0_DOMAIN}
			clientId={CONSTANTS.AUTH0_CLIENT_ID}
			authorizationParams={{
				redirect_uri: `${window.location.origin}${Urls.Dashboard}`,
				audience: Api.Auth0.Audience,
				scope: "read:current_user write:current_user",
			}}
		>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</Auth0Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
