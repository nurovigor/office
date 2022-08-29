import React from 'react';
import { render } from '@testing-library/react';
import { Preloader } from './';

describe('Preloader component', () => {
	it('renders Preloader component', () => {
		const { asFragment } = render(<Preloader />);
		expect(asFragment()).toMatchSnapshot();
	});
});
