import { AppThunk } from '../types';
import { actions } from '../actions';

export const appThunk = (): AppThunk => (dispatch) => {
	dispatch(actions.appNode.increment());
};
