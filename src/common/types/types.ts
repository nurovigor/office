export type OpenSpaceNumber = 1 | 2 | 3 | 4;

export type LinkType = {
	path: string;
	title: string;
};

export type RotateType = 0 | 90 | 180 | 270;

export type DirectionType = 'top' | 'right' | 'bottom' | 'left';

export type Nullable<T> = null | T;

export type FilterName = {
	name: string;
	type: string;
	bind: string;
};

export type UpdateDataType = {
	developerId: Nullable<string>;
	tableId: Nullable<string>;
	pc: Nullable<string>;
	monitor: Nullable<string>;
	keyboard: Nullable<string>;
	mouse: Nullable<string>;
	microphone: Nullable<string>;
	headphones: Nullable<string>;
	camera: Nullable<string>;
};

export type GetTechnics = {
	name: string;
	type: string;
	bind: string;
	currentPage: number;
	pageSize: number;
	sort: string[];
};

export interface TechnicTypeI {
	bind: string;
	name: Nullable<string>;
	serial: Nullable<string>;
	type: Nullable<string>;
	__v: number;
	_id: string;
}

export type FilterType = {
	name: string;
	selectedOption: string;
	options: string[];
};

export type CreateDataResponse = {
	name: string;
	type: string;
	serial: string;
	bind: string;
};
