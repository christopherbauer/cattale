import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const theme = extendTheme({
	config: {
		cssVarPrefix: "ck",
	},
});
root.render(
	<React.StrictMode>
		<Auth0Provider
			domain="dev-a32fori182vm5ael.us.auth0.com"
			clientId="Rh53B9Oh1peRLUTMDTWm52eABUUN1N6O"
			authorizationParams={{
				redirect_uri: `${window.location.origin}/dashboard`,
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
