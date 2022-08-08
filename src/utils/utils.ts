import { TableType, TableTypeI } from 'src/store/nodes/officeNode';

export const idTables = (arr: TableTypeI[]): string[] => {
	return arr.map((item) => item._id);
};

export const toAsociatedArr = (arr: TableTypeI[]): TableType => {
	return Object.assign({}, ...arr.map((item) => ({ [item._id]: { ...item } })));
};
