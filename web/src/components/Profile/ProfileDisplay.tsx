import { User } from "@auth0/auth0-react";
import { QuestionIcon } from "@chakra-ui/icons";
import { HStack, VStack, Tooltip, Icon } from "@chakra-ui/react";
import { LogoutButton } from "../Logout";

interface ProfileDisplayProps extends User {
	user: User;
}
export const ProfileDisplay = ({ user }: ProfileDisplayProps) => {
	return (
		<VStack>
			<HStack w={"100%"} justifyContent={"space-around"}>
				<img src={user.picture} alt={user.name} />
				<VStack>
					<h2>{user.name}</h2>
					<p>{user.email}</p>
					<Tooltip label={user ? JSON.stringify(user, null, 2) : "No user metadata defined"}>
						<Icon as={QuestionIcon} />
					</Tooltip>
				</VStack>
			</HStack>
			<LogoutButton />
		</VStack>
	);
};
