import { instance } from 'src/api/instance';
import { DeveloperType } from 'src/store/nodes/officeNode';

export const developersApi = {
	getDevelopers() {
		return instance.get<DeveloperType[]>('developers').then((res) => res.data);
	}
};
