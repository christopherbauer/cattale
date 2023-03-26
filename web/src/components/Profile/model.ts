import { User } from "@auth0/auth0-react";
import { Api } from "../../lib";
import { useUserStore } from "../../stores/userStore";
export const checkIfRegisteredUser = (userId: string) => {
	// integratedFetch.json("", {});
};
export const getUserMetadata = async (userId: string) => {
	const { accessToken } = useUserStore.getState();
	try {
		return await fetch(Api.Auth0.UserDetails(userId), {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}).then((response) => response.json() as Promise<User>);
	} catch (e) {
		console.error(e);
	}
};
