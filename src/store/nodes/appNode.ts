import { node } from 'redux-nodes';
import { Nullable } from 'src/types/types';

export const appNode = node(
	{
		//initialState
		error: 'Some error' as Nullable<string>
	},
	{
		//actions
		setError: (state, error: Nullable<string>) => (state.error = error)
	}
);
