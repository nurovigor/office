import { node } from 'redux-nodes';
import { Nullable } from 'src/types/types';

export const officeNode = node(
	{
		tables: [] as TableTypeI[],
		developers: [] as DeveloperType[]
	},
	{
		//actions
		setTables: (state, tables: TableTypeI[]) => (state.tables = tables),
		setDevs: (state, devs: DeveloperType[]) => (state.developers = devs),
		setUpdateTable: (state, updatedTable: TableTypeI) =>
			(state.tables = state.tables.map((table) =>
				table._id === updatedTable._id ? updatedTable : table
			)),
		removeDeveloper: (state, id: string) =>
			(state.tables = state.tables.map((table) =>
				table._id === id ? { ...table, developer: null } : table
			))
	}
);

export interface TableTypeI {
	camera: string;
	developer: Nullable<DeveloperType>;
	headphones: string;
	keyboard: string;
	microphone: string;
	monitor: string;
	mouse: string;
	number: string;
	openSpaceNumber: string;
	pc: string;
	__v: number;
	_id: string;
}

export type DeveloperType = {
	_id: string;
	firstName: string;
	lastName: string;
	phone: string;
	_v: number;
};
