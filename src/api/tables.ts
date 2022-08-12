import { TableTypeI } from 'src/store/nodes/officeNode';
import { instance } from 'src/api/instance';
import { UpdateDataType } from 'src/common/types/types';

export const tablesApi = {
	getTables() {
		return instance.get<TableTypeI[]>('tables').then((res) => res.data);
	},
	updateTable(data: UpdateDataType) {
		const { tableId } = data;
		return instance.put(`tables/${tableId}`, { ...data }).then((res) => res.data);
	}
};
