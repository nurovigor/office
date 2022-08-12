import { createSelector } from 'reselect';
import nodes from '../nodes/index';

const selectors = nodes.selectors.technicsNode;

const requestParams = createSelector(
	selectors.name,
	selectors.type,
	selectors.bind,
	selectors.currentPage,
	selectors.pageSize,
	selectors.sort,
	(name, type, bind, currentPage, pageSize, sort) => ({
		name,
		type,
		bind,
		currentPage,
		pageSize,
		sort
	})
);

export const technicSelectors = {
	...selectors,
	requestParams
};
