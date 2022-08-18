import { technicsApi } from 'src/api/technic';
import { AppThunk } from 'src/store/types';
import { actions } from 'src/store/actions';
import { idTables } from 'src/utils/utils';
import { technicSelectors } from 'src/store/selectors/technics';
import { CreateDataResponse, Nullable, TechnicTypeI } from 'src/common/types/types';
import { toast } from 'react-toastify';

export const getTechnics = (): AppThunk => async (dispatch, getState) => {
	dispatch(actions.technicsNode.setIsFetching(true));
	try {
		const requestData = technicSelectors.requestParams(getState());
		const data = await technicsApi.getTechnics(requestData);
		dispatch(actions.technicsNode.setIds(idTables(data.technics)));
		dispatch(actions.technicsNode.setTechnics(data.technics));
		dispatch(actions.technicsNode.setCurrentPage(data.currentPage));
		dispatch(actions.technicsNode.setTotalCount(data.totalCountItems));
		dispatch(actions.technicsNode.setIsFetching(false));
	} catch (e) {
		toast.error('Error while getting list of vehicles');
	}
};

export const getFilters = (): AppThunk => async (dispatch) => {
	try {
		const data = await technicsApi.getFilters();
		dispatch(actions.technicsNode.setFilterOptions(data));
	} catch (e) {
		toast.error('Error while getting list of filters');
	}
};

export const createItem = (
	data: CreateDataResponse
): AppThunk<Promise<TechnicTypeI | { [key: string]: string }>> => async (dispatch) => {
	try {
		const res = await technicsApi.createTechnic(data);
		dispatch(actions.technicsNode.addNewItem(res));
		toast.success('A new device was added');
		dispatch(getTechnics());
		dispatch(getFilters());
		return res;
	} catch (e) {
		toast.error('Error while added new device');
		// @ts-ignore
		return e.response.data.errors;
	}
};

export const updateItem = (
	id: string,
	data: CreateDataResponse
): AppThunk<Promise<TechnicTypeI | { [key: string]: string }>> => async (dispatch) => {
	try {
		const res = await technicsApi.updateTechnic(id, data);
		dispatch(actions.technicsNode.updateItem(id, res));
		toast.success('Device info was updated');
		dispatch(getTechnics());
		dispatch(getFilters());
		return res;
	} catch (e) {
		toast.error('Error while updated device info');
		// @ts-ignore
		return e.response.data.errors;
	}
};

export const deleteItem = (id: string): AppThunk => async (dispatch) => {
	try {
		const res = await technicsApi.deleteTechnic(id);
		dispatch(actions.technicsNode.removeItem(res._id));
		dispatch(actions.technicsNode.setItem(null));
		dispatch(getTechnics());
		dispatch(getFilters());
		toast.success('Device was deleted');
	} catch (e) {
		// @ts-ignore
		toast.error(e.response.data.error);
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

export const setSelectedItem = (id: Nullable<string>): AppThunk => (dispatch) => {
	try {
		dispatch(actions.technicsNode.setItem(id));
	} catch (e) {
		dispatch(actions.appNode.setError('Error while setting selected item'));
	}
};

export const updateOrCreateItem = (
	itemId: Nullable<string> = null,
	data: CreateDataResponse
): AppThunk<Promise<TechnicTypeI | { [key: string]: string }>> => (dispatch) => {
	if (itemId) {
		return dispatch(updateItem(itemId, data));
	} else {
		return dispatch(createItem(data));
	}
};
