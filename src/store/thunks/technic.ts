import { technicsApi } from 'src/api/technic';
import { AppThunk } from 'src/store/types';
import { actions } from 'src/store/actions';
import { idTables } from 'src/utils/utils';
import { technicSelectors } from 'src/store/selectors/technics';

export const getTechnics = (): AppThunk => (dispatch, getState) => {
	const requestData = technicSelectors.requestParams(getState());

	technicsApi.getTechnics(requestData).then((data) => {
		dispatch(actions.technicsNode.setIds(idTables(data.technics)));
		dispatch(actions.technicsNode.setTechnics(data.technics));
		dispatch(actions.technicsNode.setCurrentPage(data.currentPage));
		dispatch(actions.technicsNode.setTotalCount(data.totalCountItems));
	});
};

export const getFilters = (): AppThunk => (dispatch) => {
	technicsApi.getFilters().then((data) => {
		dispatch(actions.technicsNode.setFilterOptions(data));
	});
};

export const setSortValue = (name: string, value: string): AppThunk => (dispatch) => {
	dispatch(actions.technicsNode.setSort(name, value));
	dispatch(getTechnics());
};

export const setCurrentPage = (pageNumber: number): AppThunk => (dispatch) => {
	dispatch(actions.technicsNode.setCurrentPage(pageNumber));
	dispatch(getTechnics());
};

export const setFilterValue = (filterName: string, filter: string): AppThunk => (dispatch) => {
	dispatch(actions.technicsNode.setFilter(filterName, filter));
	dispatch(actions.technicsNode.setOption(filterName, filter));
	dispatch(actions.technicsNode.setCurrentPage(1));
	dispatch(getTechnics());
};
