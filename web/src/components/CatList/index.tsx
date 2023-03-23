import { Box, Center, Progress, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { DataRequest, IdleRequest, makeRequest } from "../../lib";
import { CatListDisplay } from "./CatListDisplay";
import { getCatList } from "./model";
import { Cat } from "./types";

export const CatList = () => {
	const [request, setRequest] = useState<DataRequest<Cat[]>>(IdleRequest);
	const makeCatRequest = useCallback(() => makeRequest(getCatList, setRequest), []);
	useEffect(() => {
		makeCatRequest();
	}, [makeCatRequest]);

	if (request.idle) {
		return <Progress />;
	} else if (request.inflight) {
		return (
			<Box padding={6} boxShadow={"lg"} bg="white">
				<SkeletonCircle size="10" />
				<SkeletonText mt={4} noOfLines={4} spacing={4} skeletonHeight={2} />
			</Box>
		);
	} else {
		return (
			<Center>
				<CatListDisplay cats={request.data} />
			</Center>
		);
	}
};
