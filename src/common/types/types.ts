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
	tableId: string;
	pc: string;
	monitor: string;
	keyboard: string;
	mouse: string;
	microphone: string;
	headphones: string;
	camera: string;
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
	_id: string;
	name: Nullable<string>;
	type: Nullable<string>;
	bounded: boolean;
	serial: Nullable<string>;
	__v: number;
}

export type FilterType = {
	name: string;
	selectedOption: string;
	options: string[];
};
