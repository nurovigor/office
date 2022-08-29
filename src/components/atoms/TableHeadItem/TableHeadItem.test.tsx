import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TableHeadItem } from './';
import { headData } from 'src/common/types/types';

describe('TableHeadItem component', () => {
	let item: headData[];
	let sortValues: string[];
	let onClick: any;
	beforeEach(() => {
		item = [
			{
				id: '1',
				name: 'name',
				accessor: 'name'
			},
			{
				id: '2',
				name: 'type',
				accessor: 'type'
			},
			{
				id: '3',
				name: 'bind',
				accessor: 'bind'
			}
		];
		sortValues = ['name'];

		onClick = jest.fn();
	});
	it('renders TableHeadItem component', () => {
		const { container } = render(
			<table>
				<TableHeadItem item={item} sortValues={sortValues} handleSorting={onClick} />
			</table>
		);
		expect(container).toMatchSnapshot();
	});

	/*	it('renders with classname UP', () => {
		render(
			<table>
				<TableHeadItem item={item} sortValues={sortValues} handleSorting={onClick} />
			</table>
		);
		expect(screen.getAllByTestId('arrow-filter')[0]).toHaveClass('Sort');
	});*/

	it('onClick works', () => {
		render(
			<table>
				<TableHeadItem item={item} sortValues={sortValues} handleSorting={onClick} />
			</table>
		);
		fireEvent(
			screen.getAllByRole('button')[0],
			new MouseEvent('click', {
				bubbles: true,
				cancelable: true
			})
		);
		expect(onClick).toBeCalledWith('name', 'asc');
	});
});
