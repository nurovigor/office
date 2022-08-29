import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from './Link';

describe('renders Link component', () => {
	it('Link render with title', () => {
		render(
			<Router>
				<Link path="#" isActive={false} title="Link" />
			</Router>
		);
		expect(screen.getByText(/Link/i)).toBeInTheDocument();
	});

	it('Link snapshot', () => {
		const { asFragment } = render(
			<Router>
				<Link path="#" isActive={false} title="Link" />
			</Router>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
