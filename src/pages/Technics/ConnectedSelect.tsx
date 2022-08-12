import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { setFilterValue } from 'src/store/thunks/technic';
import { CustomSelectV2 } from 'src/components/atoms/CustomSelect/CustomSelectV2';

export const ConnectedSelect = () => {
	const filter = useAppSelector((state) => state.technicsNode.filter);
	const dispatch = useAppDispatch();

	const onChangeFilter = (filterName: string, filter: string) => {
		dispatch(setFilterValue(filterName, filter));
	};

	return (
		<>
			{filter.map((item, index) => (
				<CustomSelectV2
					selectedFilter={item.selectedOption}
					key={index}
					optionsList={item.options}
					filterName={item.name}
					onChangeOption={onChangeFilter}
				/>
			))}
		</>
	);
};
