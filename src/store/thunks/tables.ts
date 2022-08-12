import { AppThunk } from 'src/store/types';
import { actions } from 'src/store/actions';
import { UpdateDataType } from 'src/common/types/types';
import { tablesApi } from 'src/api';

export const updateTable = (data: UpdateDataType): AppThunk => (dispatch) => {
	tablesApi
		.updateTable(data)
		.then((data) => {
			if (data.length) {
				const [updatedTable, oldTable] = data;
				dispatch(actions.officeNode.removeDevOldTable(oldTable._id));
				dispatch(actions.officeNode.setUpdateTable(updatedTable));
			}
			dispatch(actions.officeNode.setUpdateTable(data));
		})
		.catch(() => {
			dispatch(actions.appNode.setError('An error occurred while updating the table'));
		});
};
