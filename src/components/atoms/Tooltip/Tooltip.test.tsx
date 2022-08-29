import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Tooltip } from 'src/components/atoms/Tooltip/Tooltip';
import userEvent from '@testing-library/user-event';

describe('Tooltip component', () => {
	let callBack = jest.fn();

	it('renders Tooltip', () => {
		const { asFragment } = render(
			<Tooltip content={<h1>Content</h1>} showModal={callBack}>
				<h2>Children</h2>
			</Tooltip>
		);
		expect(asFragment()).toMatchSnapshot();
	});

	it('renders Tooltip with content', () => {
		const { asFragment } = render(
			<Tooltip content={<h1>Content</h1>} showModal={callBack}>
				<h2>Children</h2>
			</Tooltip>
		);
		userEvent.hover(screen.getByTestId('tooltip-trigger'));
		expect(asFragment()).toMatchSnapshot();
	});

	it('click button Edit works', () => {
		render(
			<Tooltip content={<h1>Content</h1>} showModal={callBack}>
				<h2>Children</h2>
			</Tooltip>
		);
		fireEvent.click(screen.getByTestId('tooltip-trigger'));
		fireEvent.click(screen.getByText(/edit/i));
		expect(callBack).toBeCalled();
	});
});
