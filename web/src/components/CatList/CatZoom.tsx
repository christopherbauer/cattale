import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Image } from "@chakra-ui/react";
import { useMemo } from "react";
import { Cat } from "./types";

interface CatZoomProps {
	selectedCat: Cat | undefined;
	onClosed: () => void;
}
export const CatZoom = ({ selectedCat, onClosed }: CatZoomProps) => {
	const isShowing = useMemo(() => selectedCat !== undefined, [selectedCat]);
	return (
		<Modal size={"xl"} key={selectedCat?.name} isOpen={isShowing} onClose={onClosed}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{selectedCat?.name}</ModalHeader>
				<ModalBody>
					<Image src={selectedCat?.imageUri || "cattail.jpeg"} />
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
