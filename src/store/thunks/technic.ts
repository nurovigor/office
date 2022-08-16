import { technicsApi } from 'src/api/technic';
import { AppThunk } from 'src/store/types';
import { actions } from 'src/store/actions';
import { idTables } from 'src/utils/utils';
import { technicSelectors } from 'src/store/selectors/technics';

export const getTechnics = (): AppThunk => async (dispatch, getState) => {
	try {
		const requestData = technicSelectors.requestParams(getState());
		const data = await technicsApi.getTechnics(requestData);
		dispatch(actions.technicsNode.setIds(idTables(data.technics)));
		dispatch(actions.technicsNode.setTechnics(data.technics));
		dispatch(actions.technicsNode.setCurrentPage(data.currentPage));
		dispatch(actions.technicsNode.setTotalCount(data.totalCountItems));
	} catch (e) {
		dispatch(actions.appNode.setError('Error while getting list of vehicles'));
	}
};

export const getFilters = (): AppThunk => async (dispatch) => {
	try {
		const data = await technicsApi.getFilters();
		dispatch(actions.technicsNode.setFilterOptions(data));
	} catch (e) {
		dispatch(actions.appNode.setError('Error while getting list of filters'));
	}
};

export const setSortValue = (name: string, value: string): AppThunk => async (dispatch) => {
	try {
		dispatch(actions.technicsNode.setSort(name, value));
		dispatch(getTechnics());
	} catch (e) {
		dispatch(actions.appNode.setError('Error while setting sort value'));
	}
};

export const setCurrentPage = (pageNumber: number): AppThunk => async (dispatch) => {
	try {
		dispatch(actions.technicsNode.setCurrentPage(pageNumber));
		dispatch(getTechnics());
	} catch (e) {
		dispatch(actions.appNode.setError('Error while setting current page'));
	}
};

export const setFilterValue = (filterName: string, filter: string): AppThunk => async (
	dispatch
) => {
	try {
		dispatch(actions.technicsNode.setFilter(filterName, filter));
		dispatch(actions.technicsNode.setOption(filterName, filter));
		dispatch(actions.technicsNode.setCurrentPage(1));
		dispatch(getTechnics());
	} catch (e) {
		dispatch(actions.appNode.setError('Error while setting filter value'));
	}
};
