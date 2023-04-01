import { getResponseClass } from "./response";
/**
 * This is a [hybrid type](https://www.typescriptlang.org/docs/handbook/interfaces.html#hybrid-types) that allows us to
 * utilize some static methods as syntactic sugar for certain scenarios
 */
interface IntegratedFetch {
	(input: RequestInfo, init?: RequestInit | undefined): Promise<Response>;
	json: <T>(input: RequestInfo, init?: RequestInit | undefined) => Promise<T>;
}
/**
 * IntegratedFetch adds response class to the response from the fetch request
 * @param input Nominal RequestInfo input from fetch
 * @param init Nominal RequestInit input from fetch
 * @returns A fetch response decorated with the response class of a request
 */
const integratedFetch: IntegratedFetch = (input, init) => {
	return fetch(input, init).then(async (response) => {
		const { status } = response;
		const responseClass = getResponseClass(status);
		return Promise.resolve({ ...response, responseClass });
	});
};
/**
 * The json method handles converting json to an object of type T
 * @param input Nominal RequestInfo input from fetch
 * @param init Nominal RequestInit input from fetch
 * @returns A promise that resolves to an object of type T
 */
integratedFetch.json = <T>(
	input: RequestInfo,
	init?: RequestInit | undefined
) => integratedFetch(input, init).then((res) => res.json() as Promise<T>);
export { integratedFetch };
