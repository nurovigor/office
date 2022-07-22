import { node } from 'redux-nodes';

export const technicsNode = node(
	{
		//initialState
		technicsCount: 50
	},
	{
		//actions
		addTechnic: (state) => state.technicsCount++,
		removeTechnic: (state) => state.technicsCount--
	}
);
