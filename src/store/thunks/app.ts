import { developersApi, tablesApi } from 'src/api';
import { AppThunk } from '../types';
import { actions } from 'src/store/actions';
import { idTables, toAsociatedArr } from 'src/utils/utils';
import { Nullable } from 'src/common/types/types';

export const appThunk = (): AppThunk => (dispatch) => {
	Promise.all([tablesApi.getTables(), developersApi.getDevelopers()])
		.then((data) => {
			dispatch(actions.officeNode.setIds(idTables(data[0])));
			dispatch(actions.officeNode.setTables(toAsociatedArr(data[0])));
			dispatch(actions.officeNode.setDevs(data[1]));
		})
		.catch(() => {
			dispatch(actions.appNode.setError('An error occurred while getting the list of tables'));
		});
};

export const setAppError = (error: Nullable<string>): AppThunk => (dispatch) => {
	dispatch(actions.appNode.setError(error));
};
