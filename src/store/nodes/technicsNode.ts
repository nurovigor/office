import { node } from 'redux-nodes';
import { FilterName, FilterType, TechnicTypeI } from 'src/common/types/types';

export const technicsNode = node(
	{
		//initialState
		ids: [] as string[],
		technics: [] as TechnicTypeI[],
		currentPage: 1 as number,
		totalCountItems: 0 as number,
		pageSize: 10,
		filter: [] as FilterType[],
		name: '' as string,
		type: '' as string,
		bind: '' as string,
		sort: [] as string[]
	},
	{
		//actions
		setIds: (state, ids: string[]) => (state.ids = ids),
		setTechnics: (state, technics: TechnicTypeI[]) => (state.technics = technics),
		setCurrentPage: (state, currentPage: number) => (state.currentPage = currentPage),
		setFilter: (state, filterName: string, filter: string) =>
			(state[filterName as keyof FilterName] = filter),
		setTotalCount: (state, count: number) => (state.totalCountItems = count),
		setFilterOptions: (state, filterOptions: FilterType[]) => (state.filter = filterOptions),
		setSort: (state, name: string, value: string) => (state.sort = [name, value])
	}
);
