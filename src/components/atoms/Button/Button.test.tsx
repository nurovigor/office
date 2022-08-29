import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './';

describe('Button component', () => {
	it('renders Button component', () => {
		const handleClick = jest.fn();
		const { asFragment } = render(
			<Button type="button" className="myClassName" onClick={handleClick}>
				Button title
			</Button>
		);
		expect(asFragment()).toMatchSnapshot();
	});
	it('click', () => {
		const handleClick = jest.fn();
		render(<Button onClick={handleClick}>Click Me</Button>);
		fireEvent.click(screen.getByText(/click me/i));
		expect(handleClick).toBeCalled();
	});
});
