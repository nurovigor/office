import { node } from 'redux-nodes';

export const officeNode = node(
	{
		//initialState
		officeName: 'Microsoft',
		authorName: 'Bill Gates'
	},
	{
		//actions
		changeAuthor: (state, authorName: string) => (state.authorName = authorName),
		changeOffice: (state, officeName: string) => (state.officeName = officeName)
	}
);
