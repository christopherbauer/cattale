import { DataRequest, IdleRequest } from "./types";

/**
 * This method, in conjunction with a default of IdleRequest, handles the request lifecycle for you
 * @param getter The data request
 * @param setter A set state action that operates on a DataRequest<T> and handles the request lifecycle
 */
export const makeRequest: <T>(
	getData: () => Promise<T>,
	setter: React.Dispatch<React.SetStateAction<DataRequest<T>>>
) => void = (getter, setter) => {
	setter({ idle: false, inflight: true });
	getter()
		.then((r) => {
			setter({
				idle: false,
				inflight: false,
				data: r,
			});
		})
		.catch(() => {
			setter(IdleRequest);
		});
};
export const Wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const Urls = {
	Home: "/",
	Dashboard: "/dashboard",
};
export const CONSTANTS = {
	AUTH0_DOMAIN: String(process.env.REACT_APP_AUTH0_DOMAIN),
	AUTH0_CLIENT_ID: String(process.env.REACT_APP_AUTH0_CLIENT_ID),
};
export const Api = {
	Auth0: {
		Audience: `https://${CONSTANTS.AUTH0_DOMAIN}/api/v2/`,
		UserDetails: (userId: string) => `https://${CONSTANTS.AUTH0_DOMAIN}/api/v2/users/${userId}`,
	},
	User: {
		Login: `https://localhost:3000/account/login`,
	},
};
export { IdleRequest };
export type { DataRequest };
