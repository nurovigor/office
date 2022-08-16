import { AppThunk } from 'src/store/types';
import { actions } from 'src/store/actions';
import { tablesApi } from 'src/api';
import { UpdateDataType } from 'src/common/types/types';

export const updateTable = (data: UpdateDataType): AppThunk => async (dispatch) => {
	try {
		const res = await tablesApi.updateTable(data);
		if (res.length) {
			const [updatedTable, oldTable] = res;
			dispatch(actions.officeNode.removeDevOldTable(oldTable._id));
			dispatch(actions.officeNode.setUpdateTable(updatedTable));
		}
		dispatch(actions.officeNode.setUpdateTable(res));
	} catch (e) {
		dispatch(actions.appNode.setError('An error occurred while updating the table'));
	}
};
