import axios from 'axios';
import { Nullable } from 'src/types/types';
import { DeveloperType, TableTypeI } from 'src/store/nodes/officeNode';

const instance = axios.create({
	baseURL: 'http://localhost:3003/api/',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});

export const tablesApi = {
	getTables() {
		return instance.get<TableTypeI[]>('tables').then((res) => res.data);
	},
	updateTable(data: UpdateDataType) {
		const { tableId } = data;
		return instance.put(`tables/${tableId}`, { ...data }).then((res) => res.data);
	}
};

export const developersApi = {
	getDevelopers() {
		return instance.get<DeveloperType[]>('developers').then((res) => res.data);
	}
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
