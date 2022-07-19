import { buildNodes, node } from 'redux-nodes';
import { legacy_createStore as createStore } from 'redux';
import { createSelector } from 'reselect';

const app = node(
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

const { reducer, actions, selectors: stateSelectors } = buildNodes(app);

const selectors = {
	...stateSelectors,
	countResult: createSelector(stateSelectors.count, (count) => count)
};

export const store = createStore(reducer);

selectors.count(store.getState());

export { actions, selectors };
