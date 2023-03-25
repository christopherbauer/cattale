import { create } from "zustand";
interface UserStore {
	accessToken: string | undefined;
	setAccessToken: (accessToken: string) => void;
}
export const useUserStore = create<UserStore>((set) => ({
	accessToken: undefined,
	setAccessToken: (accessToken) => {
		set({ accessToken: accessToken });
	},
}));
