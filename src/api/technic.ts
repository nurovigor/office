import { instance } from 'src/api/instance';
import { CreateDataResponse, GetTechnics, TechnicTypeI } from 'src/common/types/types';

export const technicsApi = {
	getTechnics({ currentPage, pageSize, name, type, bind, sort }: GetTechnics) {
		const params = new URLSearchParams();
		params.append('page', currentPage.toString());
		params.append('count', pageSize.toString());
		params.append('name', name);
		params.append('type', type);
		params.append('bind', bind);
		params.append('sort', JSON.stringify(sort));

		return instance.get('technics', { params }).then((res) => res.data);
	},
	getFilters() {
		return instance.get('technics/filters').then((res) => res.data);
	},
	createTechnic(data: CreateDataResponse) {
		return instance.post<TechnicTypeI>('technics', data).then((res) => res.data);
	},
	updateTechnic(id: string, data: CreateDataResponse) {
		return instance.put<TechnicTypeI>(`technics/${id}`, data).then((res) => res.data);
	},
	deleteTechnic(id: string) {
		return instance.delete(`technics/${id}`).then((res) => res.data);
	}
};
