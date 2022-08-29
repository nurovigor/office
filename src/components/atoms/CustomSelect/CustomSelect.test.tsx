import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { CustomSelect } from 'src/components/atoms/CustomSelect/CustomSelect';

describe('CustomSelect component', () => {
	let options: string[];
	let onChange: (filterName: string, option: string) => void;
	let filterName: string;
	let selectedFilter: string;
	beforeEach(() => {
		options = ['name', 'type', 'bind'];
		onChange = jest.fn();
		filterName = 'name';
		selectedFilter = 'Panasonic';
	});
	it('renders CustomSelect', () => {
		const { asFragment } = render(
			<CustomSelect
				optionsList={options}
				onChangeOption={onChange}
				filterName={filterName}
				selectedFilter={selectedFilter}
			/>
		);
		expect(asFragment()).toMatchSnapshot();
	});

	it('filter by Panasonic', () => {
		render(
			<CustomSelect
				optionsList={options}
				onChangeOption={onChange}
				filterName={filterName}
				selectedFilter={selectedFilter}
			/>
		);
		expect(screen.getByText('Panasonic')).toBeInTheDocument();
	});

	it('filter not selected', () => {
		const { asFragment } = render(
			<CustomSelect
				optionsList={options}
				onChangeOption={onChange}
				filterName={filterName}
				selectedFilter={''}
			/>
		);
		expect(asFragment()).toMatchSnapshot();
	});

	it('onChange called with params', () => {
		render(
			<CustomSelect
				optionsList={options}
				onChangeOption={onChange}
				filterName={filterName}
				selectedFilter={selectedFilter}
			/>
		);
		fireEvent.click(screen.getByTestId('show-options'));
		fireEvent.click(screen.getByTestId('select-option'));
		expect(onChange).toBeCalledWith('name', '');
	});

	it('renders CustomSelect with open options', () => {
		const { asFragment } = render(
			<CustomSelect
				optionsList={options}
				onChangeOption={onChange}
				filterName={filterName}
				selectedFilter={selectedFilter}
			/>
		);
		fireEvent.click(screen.getByTestId('show-options'));
		expect(asFragment()).toMatchSnapshot();
	});
});
