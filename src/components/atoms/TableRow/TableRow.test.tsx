import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TableRow } from './';
import { Nullable, TechnicTypeI } from 'src/common/types/types';

describe('TableRow component', () => {
	let data: TechnicTypeI;
	let selectedId: Nullable<string>;
	let changeSelectedItem: (itemId: Nullable<string>) => void;
	beforeEach(() => {
		data = {
			bind: false,
			name: 'Panasonic',
			serial: null,
			type: 'Headphones',
			__v: 1,
			_id: '1'
		};
		selectedId = '1';
		changeSelectedItem = jest.fn();
	});
	it('renders TableRow component', () => {
		const { asFragment } = render(
			<table>
				<TableRow data={data} selectedId={selectedId} changeSelectedItem={changeSelectedItem} />
			</table>
		);
		expect(asFragment()).toMatchSnapshot();
	});

	it('render with binding', () => {
		data = {
			bind: true,
			name: 'Panasonic',
			serial: null,
			type: 'Headphones',
			__v: 1,
			_id: '1'
		};
		render(
			<table>
				<TableRow data={data} selectedId={selectedId} changeSelectedItem={changeSelectedItem} />
			</table>
		);
		expect(screen.getByTestId('bind')).toHaveTextContent(/Yes/i);
	});

	it('onClick works', () => {
		render(
			<table>
				<TableRow data={data} selectedId={selectedId} changeSelectedItem={changeSelectedItem} />
			</table>
		);
		fireEvent(
			screen.getByTestId('table-row'),
			new MouseEvent('click', {
				bubbles: true,
				cancelable: true
			})
		);
		expect(changeSelectedItem).toBeCalledWith('1');
	});
});
