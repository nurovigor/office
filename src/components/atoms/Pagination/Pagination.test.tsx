import React from 'react';
import { render } from '@testing-library/react';
import { Pagination } from 'src/components/atoms/Pagination';

describe('Tooltip component', () => {
	let callBack = jest.fn();

	it('renders Tooltip', () => {
		const { asFragment } = render(
			<Pagination totalCount={100} pageSize={10} currentPage={1} onPageChange={callBack} />
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
