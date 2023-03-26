export interface ResponseClassRange {
	start: number;
	end: number;
}
export enum ResponseClass {
	Informational = 1,
	Successful = 2,
	Redirects = 3,
	ClientErrors = 4,
	ServerErrors = 5,
}

export interface UseRequestOutput<T> {
	data: T | undefined;
	responseClass: ResponseClass | undefined;
	status: number | undefined;
	loading: boolean;
	retry: boolean;
	tries: number;
}
