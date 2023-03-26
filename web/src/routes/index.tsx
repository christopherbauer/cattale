import { useAuth0 } from "@auth0/auth0-react";
import { Box, Text, Progress } from "@chakra-ui/react";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Api, Urls } from "../lib";
import { useUserStore } from "../stores/userStore";

export const AuthenticatedRoute = () => {
	const { isAuthenticated, isLoading, user, getAccessTokenSilently } = useAuth0();
	const { accessToken, setAccessToken } = useUserStore();
	useEffect(() => {
		const getUserMetadata = async () => {
			try {
				const accessToken = await getAccessTokenSilently({
					authorizationParams: {
						audience: Api.Auth0.Audience,
						scope: "read:current_user",
					},
				});

				setAccessToken(accessToken);
			} catch (e) {
				console.error(e);
			}
		};
		if (!isLoading && isAuthenticated && !accessToken) {
			getUserMetadata();
		}
	}, [accessToken, getAccessTokenSilently, isAuthenticated, isLoading, setAccessToken, user]);
	if (!isLoading && !isAuthenticated) {
		return <Navigate to={Urls.Home} />;
	}
	if (!accessToken) {
		return (
			<Box bg="white" p={4} shadow="lg">
				<Progress />
				<Text>Logging you in...</Text>
			</Box>
		);
	}
	return <Outlet />;
};
