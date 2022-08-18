import { TableType, TableTypeI } from 'src/store/nodes/officeNode';

export const idTables = (arr: TableTypeI[]): string[] => {
	return arr.map((item) => item._id);
};

export const toAsociatedArr = (arr: TableTypeI[]): TableType => {
	return Object.assign({}, ...arr.map((item) => ({ [item._id]: { ...item } })));
};

/*export const createErrorObj = (arr: { [key: string]: string }[]) => {
	const res = {};
	arr.forEach(({ name }) => {
		// @ts-ignore
		res[name] = 'Error';
	});
	/!*for (let i = 0; i < arr.length; i++) {
		// @ts-ignore
		res[arr[i].key] = arr[i].value;*!/
	return res;
};*/
