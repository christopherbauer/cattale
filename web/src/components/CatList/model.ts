import { Cat } from "./types";

export const getCatList: () => Promise<Cat[]> = () => {
	return Promise.resolve([
		{
			name: "Ra-Ra",
			description: "Gray and white",
			tags: ["Thunderpaws", "Sadcat", "Ra-madon Meowlowsividge"],
			imageUri: "",
		},
		{
			name: "Oscar",
			description: "Voidling",
			tags: ["Buddy", "Big Buddy Boy", "Floscar"],
			imageUri: "",
		},
		{
			name: "Rasputin",
			description: "Black Magic Tiger (BMT)",
			tags: ["Black Magic Tiger", "Slow Buddy", "Bless his heart"],
			imageUri: "",
		},
		{
			name: "Ni-Ni",
			description: "Likes the hairy ones",
			tags: ["Objectifier", "Merr", "Nini beans"],
			imageUri: "",
		},

		{
			name: "Squid",
			description: "Squish",
			tags: ["Squidge", "Squidgems"],
			imageUri: "",
		},
	]);
};
