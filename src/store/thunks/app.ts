import { actions } from 'src/store/actions';
import { AppThunk } from '../types';
import { Nullable } from 'src/common/types/types';

export const setAppError = (error: Nullable<string>): AppThunk => (dispatch) => {
	dispatch(actions.appNode.setError(error));
};

export const setAppStatus = (status: Nullable<string>): AppThunk => (dispatch) => {
	dispatch(actions.appNode.setStatus(status));
};
