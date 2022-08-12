import { node } from 'redux-nodes';
import { Nullable } from 'src/common/types/types';

export const officeNode = node(
	{
		ids: [] as string[],
		tables: {} as TableType,
		developers: [] as DeveloperType[]
	},
	{
		//actions
		setIds: (state, ids: string[]) => (state.ids = ids),
		setTables: (state, tables: TableType) => (state.tables = tables),
		setDevs: (state, devs: DeveloperType[]) => (state.developers = devs),
		setUpdateTable: (state, updatedTable: TableTypeI) =>
			(state.tables[updatedTable._id] = updatedTable),
		removeDevOldTable: (state, tableId: string) => (state.tables[tableId].developer = null)
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

export type TableType = {
	[key: string]: TableTypeI;
};
