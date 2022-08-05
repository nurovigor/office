import { AppThunk } from '../types';
import { developersApi, tablesApi, UpdateDataType } from 'src/api/api';
import { actions } from 'src/store/actions';
import { Nullable } from 'src/types/types';

export const appThunk = (): AppThunk => (dispatch) => {
	Promise.all([tablesApi.getTables(), developersApi.getDevelopers()])
		.then((data) => {
			dispatch(actions.officeNode.setTables(data[0]));
			dispatch(actions.officeNode.setDevs(data[1]));
		})
		.catch(() => {
			dispatch(actions.appNode.setError('An error occurred while getting the list of tables'));
		});
};

export const updateTable = (data: UpdateDataType): AppThunk => (dispatch) => {
	tablesApi
		.updateTable(data)
		.then((data) => {
			dispatch(actions.officeNode.removeDeveloper(data.tableId));
			dispatch(actions.officeNode.setUpdateTable(data));
		})
		.catch(() => {
			dispatch(actions.appNode.setError('An error occurred while updating the table'));
		});
};

export const setAppError = (error: Nullable<string>): AppThunk => (dispatch) => {
	dispatch(actions.appNode.setError(error));
};
