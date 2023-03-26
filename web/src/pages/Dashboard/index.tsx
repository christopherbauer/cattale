import { Container } from "@chakra-ui/react";
import { CatList } from "../../components/CatList";
import { Profile } from "../../components/Profile";

export const Dashboard = () => {
	return (
		<Container>
			<Profile />
			<CatList />
		</Container>
	);
};
