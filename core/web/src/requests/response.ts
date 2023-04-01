import { ResponseClass, ResponseClassRange } from "./types";

const getRange = (start: number, end: number) => ({ start, end });

export const ResponseClasses: Record<ResponseClass, ResponseClassRange> = {
	[ResponseClass.Informational]: getRange(100, 199),
	[ResponseClass.Successful]: getRange(200, 299),
	[ResponseClass.Redirects]: getRange(300, 399),
	[ResponseClass.ClientErrors]: getRange(400, 499),
	[ResponseClass.ServerErrors]: getRange(500, 599),
};

export const getResponseClass = (status: number) =>
	Object.entries<ResponseClassRange>(ResponseClasses).find(
		([key, value]) => status >= value.start && status <= value.end
	)?.[0] as ResponseClass | undefined;
