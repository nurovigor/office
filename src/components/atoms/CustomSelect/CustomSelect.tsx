import React, { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import { Container, Select } from './styles';

type DefaultSelectPropsType = DetailedHTMLProps<
	SelectHTMLAttributes<HTMLSelectElement>,
	HTMLSelectElement
>;

type CustomSelectProps = DefaultSelectPropsType & {
	options: string[];
	// eslint-disable-next-line no-unused-vars
	onChangeOption?: (filterName: string, option: string) => void;
	filterName: string;
	selectedFilter: string;
};

export const CustomSelect: React.FC<CustomSelectProps> = ({
	options,
	onChange,
	onChangeOption,
	filterName,
	selectedFilter,
	...restProps
}) => {
	let mappedOptions = [] as React.ReactNode[];

	if (options.includes('false')) {
		mappedOptions = options.map((item, index) => (
			<option key={index} value={item === 'true' ? 'Yes' : 'No'}>
				{item === 'true' ? 'Yes' : 'No'}
			</option>
		));
	} else {
		mappedOptions = options.map((item, index) => (
			<option key={index} value={item}>
				{item}
			</option>
		));
	}

	const onChangeCallback = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChange && onChange(e);

		const filter =
			e.currentTarget.value === 'Yes'
				? 'true'
				: e.currentTarget.value === 'No'
					? 'false'
					: e.currentTarget.value;

		const is = options.find((option) => option === filter) ? filter : '';

		onChangeOption && onChangeOption(filterName, is);
	};

	return (
		<div className={Container}>
			<select className={Select} onChange={onChangeCallback} {...restProps}>
				<option value={selectedFilter ? selectedFilter : ''}>
					Filter by {selectedFilter ? selectedFilter : filterName}
				</option>
				{mappedOptions}
			</select>
		</div>
	);
};
