import { useAuth0, User } from "@auth0/auth0-react";
import { Box, Center, HStack, Progress, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useUserStore } from "../../stores/userStore";
import { LogoutButton } from "../Logout";
import { checkIfRegisteredUser, getUserMetadata } from "./model";
import { ProfileDisplay } from "./ProfileDisplay";

export const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();
	const { accessToken } = useUserStore();
	const [userMetadata, setUserMetadata] = useState<User | undefined>(undefined);
	useEffect(() => {
		if (!isLoading && isAuthenticated && user && user.sub) {
			checkIfRegisteredUser(user.sub);
			getUserMetadata(user.sub).then((userMetadata) => {
				if (userMetadata) {
					setUserMetadata(userMetadata);
				} else {
					setUserMetadata(undefined);
				}
			});
		}
	}, [accessToken, isAuthenticated, isLoading, user, user?.sub]);
	if (isLoading || !(isAuthenticated && user && userMetadata)) {
		return (
			<Box bg="white" p={4} mb={4} border={2} shadow={"lg"} padding={2}>
				<Progress size="xs" isIndeterminate />
				<HStack mt={4}>
					<SkeletonCircle />
					<SkeletonText mt={4} noOfLines={4} spacing={2} skeletonHeight={2} flex={1} />
				</HStack>

				<Center mt={4}>
					<LogoutButton />
				</Center>
			</Box>
		);
	}
	return (
		<Box bg="white" p={4} mb={4} border={2} shadow={"lg"} padding={2}>
			<ProfileDisplay user={userMetadata} />
		</Box>
	);
};
