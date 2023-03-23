import { useAuth0 } from "@auth0/auth0-react";

import { Text, Box, Image, Center, VStack, Button } from "@chakra-ui/react";
export const Login = () => (
	<Center>
		<Box w={"xl"} mt={10} padding={6} boxShadow={"lg"} bg="white">
			<Center>
				<VStack>
					<Text fontSize={"4xl"} fontFamily={"serif"}>
						Cat Tale
					</Text>
					<Image src={"cattail.jpeg"} />
					<LoginButton />
				</VStack>
			</Center>
		</Box>
	</Center>
);
const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};
