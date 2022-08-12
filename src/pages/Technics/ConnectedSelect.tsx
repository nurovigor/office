import React from 'react';
import { CustomSelect } from 'src/components/atoms/CustomSelect/CustomSelect';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { setFilterValue } from 'src/store/thunks/technic';

export const ConnectedSelect = () => {
	const filter = useAppSelector((state) => state.technicsNode.filter);
	const dispatch = useAppDispatch();

	const onChangeFilter = (filterName: string, filter: string) => {
		dispatch(setFilterValue(filterName, filter));
	};

	return (
		<>
			{filter.map((item, index) => (
				<CustomSelect
					selectedFilter={item.selectedOption}
					key={index}
					options={item.options}
					filterName={item.name}
					onChangeOption={onChangeFilter}
				/>
			))}
		</>
	);
};
