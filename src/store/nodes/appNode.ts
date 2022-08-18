import { node } from 'redux-nodes';
import { Nullable } from 'src/common/types/types';

export const appNode = node(
	{
		//initialState
		error: null as Nullable<string>,
		status: null as Nullable<string>,
		initialize: false
	},
	{
		//actions
		setError: (state, error: Nullable<string>) => (state.error = error),
		setStatus: (state, status: Nullable<string>) => (state.status = status),
		setInitialize: (state, value: boolean) => (state.initialize = value)
	}
);
