import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import { Urls } from "./lib";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const theme = extendTheme({
	config: {
		cssVarPrefix: "ck",
	},
});
const domain = String(process.env.REACT_APP_AUTH0_DOMAIN),
	clientId = String(process.env.REACT_APP_AUTH0_CLIENT_ID);
root.render(
	<React.StrictMode>
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			authorizationParams={{
				redirect_uri: `${window.location.origin}${Urls.Dashboard}`,
				audience: `https://${domain}/api/v2/`,
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
