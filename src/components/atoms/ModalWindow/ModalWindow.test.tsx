import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { ModalWindow } from 'src/components/atoms/ModalWindow/ModalWindow';

describe('ModalWindow component', () => {
	let onClose: any;
	beforeEach(() => {
		onClose = jest.fn();
	});
	afterEach(cleanup);
	it('renders ModalWindow', () => {
		render(
			<ModalWindow closeModal={() => {}}>
				<h1>Portal</h1>
			</ModalWindow>
		);
		expect(screen.getByTestId('portal')).toMatchSnapshot();
	});
	it('close modal', () => {
		render(
			<ModalWindow closeModal={onClose}>
				<h1>Portal</h1>
			</ModalWindow>
		);
		fireEvent.click(screen.getByTestId('close-modal'));
		expect(onClose).toBeCalled();
	});
});
