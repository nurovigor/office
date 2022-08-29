import { node } from 'redux-nodes';
import { FilterName, FilterType, Nullable, TechnicTypeI } from 'src/common/types/types';

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
		sort: [] as string[],
		selectedItem: null as Nullable<string>,
		isFetching: false
	},
	{
		//actions
		setIds: (state, ids: string[]) => (state.ids = ids),
		setTechnics: (state, technics: TechnicTypeI[]) => (state.technics = technics),
		setTotalCount: (state, count: number) => (state.totalCountItems = count),
		setCurrentPage: (state, currentPage: number) => (state.currentPage = currentPage),
		setFilter: (state, filterName: string, filter: string) =>
			(state[filterName as keyof FilterName] = filter),
		setFilterOptions: (state, filterOptions: FilterType[]) => (state.filter = filterOptions),
		setOption: (state, filterName: string, filter: string) =>
			(state.filter = state.filter.map((item) =>
				item.name === filterName ? { ...item, selectedOption: filter } : item
			)),
		setSort: (state, name: string, value: string) => (state.sort = [name, value]),
		setItem: (state, id: Nullable<string>) => (state.selectedItem = id),
		removeItem: (state, id) => (state.technics = state.technics.filter((item) => item._id !== id)),
		updateItem: (state, id: string, updatedItem: TechnicTypeI) =>
			(state.technics = state.technics.map((item) => (item._id === id ? updatedItem : item))),
		addNewItem: (state, newItem: TechnicTypeI) => (state.technics = [...state.technics, newItem]),
		setIsFetching: (state, status: boolean) => (state.isFetching = status)
	}
);
