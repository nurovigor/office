import React from 'react';
import { render, screen } from '@testing-library/react';
import { SkeletonDiv } from './';

describe('Preloader component', () => {
	it('renders Preloader component', () => {
		const { asFragment } = render(<SkeletonDiv height={50} width={50} />);
		expect(asFragment()).toMatchSnapshot();
	});
	it('renders with percent width', () => {
		render(<SkeletonDiv height={50} percentWidth={50} />);
		expect(screen.getByTestId('skeleton')).toHaveStyle({ minWidth: '50%' });
	});

	it('renders with px width', () => {
		render(<SkeletonDiv height={50} width={50} />);
		expect(screen.getByTestId('skeleton')).toHaveStyle({ minWidth: '50px' });
	});
});
