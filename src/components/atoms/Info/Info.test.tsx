import React from 'react';
import { render } from '@testing-library/react';
import { Info } from './';
import { TableTypeI } from 'src/store/nodes/officeNode';

describe('Info component', () => {
	let tableData: TableTypeI;
	let count: (keyof TableTypeI)[];

	beforeEach(() => {
		tableData = {
			camera: 'Canon',
			developer: {
				_id: '1',
				firstName: 'Front',
				lastName: 'End',
				phone: '+79889999999',
				_v: 1
			},
			headphones: 'Panasonic',
			keyboard: 'A4Tech',
			microphone: 'Sven',
			monitor: 'ViewSonic',
			mouse: 'Logitech',
			number: '1',
			openSpaceNumber: '1',
			pc: 'Evo',
			__v: 1,
			_id: '1'
		};
		count = Object.keys(tableData) as (keyof TableTypeI)[];
	});
	it('renders Info component', () => {
		const { asFragment } = render(<Info count={count} table={tableData} />);
		expect(asFragment()).toMatchSnapshot();
	});
	it('renders Info without developer', () => {
		tableData = {
			camera: 'Canon',
			developer: null,
			headphones: 'Panasonic',
			keyboard: 'A4Tech',
			microphone: 'Sven',
			monitor: 'ViewSonic',
			mouse: 'Logitech',
			number: '1',
			openSpaceNumber: '1',
			pc: 'Evo',
			__v: 1,
			_id: '1'
		};
		const { asFragment } = render(<Info count={count} table={tableData} />);
		expect(asFragment()).toMatchSnapshot();
	});
});
