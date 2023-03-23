import {
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Divider,
	Badge,
	Accordion,
	Box,
	Text,
	VStack,
	Image,
	HStack,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { Cat } from "./types";

interface CatListProps {
	cats: Cat[];
}
export const CatListDisplay = ({ cats }: CatListProps) => {
	const catList = useMemo(
		() =>
			cats.map(({ name, description, imageUri, tags }) => (
				<AccordionItem>
					<AccordionButton>
						<AccordionIcon />
						<Box as="span" flex="1" textAlign={"left"}>
							{name}
						</Box>
					</AccordionButton>
					<AccordionPanel pb={4}>
						<HStack>
							<Image bg="gray.100" maxH={100} src={imageUri || "cattail.jpeg"} />
							<Text justifyItems={"flex-start"}>{description}</Text>
						</HStack>
						<Divider />
						{tags.map((t) => (
							<Badge fontSize={"xl"} color={"green"} mr={1}>
								{t}
							</Badge>
						))}
					</AccordionPanel>
				</AccordionItem>
			)),
		[cats]
	);
	return (
		<Box w={"xl"} padding={6} boxShadow={"lg"} bg="white">
			<VStack>
				<Text fontSize={"2xl"}>Your Cats</Text>
				<Accordion w={"xl"}>{catList}</Accordion>
			</VStack>
		</Box>
	);
};
