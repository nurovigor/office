import React from 'react';
import { render } from '@testing-library/react';
import { Table } from './';

describe('Table component', () => {
	it('renders Preloader component', () => {
		const { asFragment } = render(<Table direction={'top'} isActive={false} />);
		expect(asFragment()).toMatchSnapshot();
	});
	it('renders with a className equal to the Active', () => {
		const { container } = render(<Table direction={'top'} isActive={true} />);
		// eslint-disable-next-line testing-library/no-node-access
		expect(container.firstChild).toHaveClass('Active');
	});
});
