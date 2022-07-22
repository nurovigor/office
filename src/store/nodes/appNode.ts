import { node } from 'redux-nodes';

export const appNode = node(
	{
		//initialState
		count: 0
	},
	{
		//actions
		increment: (state) => state.count++,
		decrement: (state) => state.count--
	}
);
