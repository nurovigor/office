import { AppThunk } from 'src/store/types';
import { actions } from 'src/store/actions';
import { developersApi, tablesApi } from 'src/api';
import { UpdateDataType } from 'src/common/types/types';
import { idTables, toAsociatedArr } from 'src/utils/utils';

export const getTablesData = (): AppThunk => async (dispatch) => {
	try {
		const data = await Promise.all([tablesApi.getTables(), developersApi.getDevelopers()]);
		dispatch(actions.officeNode.setIds(idTables(data[0])));
		dispatch(actions.officeNode.setTables(toAsociatedArr(data[0])));
		dispatch(actions.officeNode.setDevs(data[1]));
	} catch (e) {
		dispatch(actions.appNode.setError('An error occurred while getting the list of tables'));
	}
};

export const updateTable = (data: UpdateDataType): AppThunk => async (dispatch) => {
	try {
		const res = await tablesApi.updateTable(data);
		if (res.length) {
			const [updatedTable, oldTable] = res;
			dispatch(actions.officeNode.removeDevOldTable(oldTable._id));
			dispatch(actions.officeNode.setUpdateTable(updatedTable));
			dispatch(actions.appNode.setStatus('Success'));
		}
		dispatch(actions.officeNode.setUpdateTable(res));
		dispatch(actions.appNode.setStatus('Success'));
	} catch (e) {
		dispatch(actions.appNode.setError('An error occurred while updating the table'));
	}
};
