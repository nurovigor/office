import { node } from 'redux-nodes';
import { Nullable } from 'src/types/types';

export const appNode = node(
	{
		//initialState
		error: null as Nullable<string>
	},
	{
		//actions
		setError: (state, error: Nullable<string>) => (state.error = error)
	}
);
