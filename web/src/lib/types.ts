export type DataRequest<T> =
	| {
			idle: true;
			inflight: false;
	  }
	| {
			idle: false;
			inflight: true;
	  }
	| {
			idle: false;
			inflight: false;
			data: T;
	  };
export const IdleRequest: DataRequest<any> = { idle: true, inflight: false };
