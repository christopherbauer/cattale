import { useAuth0, User } from "@auth0/auth0-react";
import { Box, Center, HStack, Progress, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LogoutButton } from "../Logout";

const domain = String(process.env.REACT_APP_AUTH0_DOMAIN);
export const Profile = () => {
	const { user, isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();
	const [userMetadata, setUserMetadata] = useState<User | null>(null);
	useEffect(() => {
		const getUserMetadata = async () => {
			try {
				const accessToken = await getAccessTokenSilently({
					authorizationParams: {
						audience: `https://${domain}/api/v2/`,
						scope: "read:current_user",
					},
				});

				const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user?.sub}`;
				console.log(userDetailsByIdUrl);

				const metadataResponse = await fetch(userDetailsByIdUrl, {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				});
				console.log(metadataResponse);
				const { user_metadata } = await metadataResponse.json();
				console.log(user_metadata);

				setUserMetadata(user_metadata);
			} catch (e) {
				console.log(e);
			}
		};
		if (!isLoading && isAuthenticated) {
			getUserMetadata();
		}
	}, [getAccessTokenSilently, isAuthenticated, isLoading, user, user?.sub]);
	if (isLoading || !(isAuthenticated && user && userMetadata)) {
		return (
			<Box bg="white" p={4} mb={4} border={2} shadow={"lg"} padding={2}>
				<Center>
					<LogoutButton />
				</Center>
				<Progress size="xs" isIndeterminate />
			</Box>
		);
	}
	console.log(userMetadata);
	return (
		<HStack>
			<img src={userMetadata.picture} alt={userMetadata.name} />
			<VStack>
				<h2>{userMetadata.name}</h2>
				<p>{userMetadata.email}</p>
				<h3>User Metadata</h3>
				{userMetadata ? <pre>{JSON.stringify(userMetadata, null, 2)}</pre> : "No user metadata defined"}
			</VStack>
			<LogoutButton />
		</HStack>
	);
};
