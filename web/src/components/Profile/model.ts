import { User } from "@auth0/auth0-react";
import { useUserStore } from "../../stores/userStore";

export const getUserMetadata = async (domain: string, userId: string) => {
	const { accessToken } = useUserStore.getState();
	try {
		const userDetailsByIdUrl = `https://${domain}/api/v2/users/${userId}`;

		return await fetch(userDetailsByIdUrl, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}).then((response) => response.json() as Promise<User>);
	} catch (e) {
		console.error(e);
	}
};
