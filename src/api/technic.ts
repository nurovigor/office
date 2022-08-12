import { instance } from 'src/api/instance';
import { GetTechnics } from 'src/common/types/types';

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
	}
};
