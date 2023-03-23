import { useAuth0 } from "@auth0/auth0-react";
import { HStack, Progress, VStack } from "@chakra-ui/react";
import { LogoutButton } from "../Logout";

export const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading || !(isAuthenticated && user)) {
		return <Progress />;
	}
	return (
		<HStack>
			<img src={user.picture} alt={user.name} />
			<VStack>
				<h2>{user.name}</h2>
				<p>{user.email}</p>
			</VStack>
			<LogoutButton />
		</HStack>
	);
};
