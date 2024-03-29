import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { setFilterValue } from 'src/store/thunks/technic';
import { CustomSelect } from 'src/components/atoms/CustomSelect/CustomSelect';
import { SkeletonSelect } from 'src/components/atoms/CustomSelect/SkeletonSelect';

export const ConnectedSelect = () => {
	const filter = useAppSelector((state) => state.technicsNode.filter);
	const dispatch = useAppDispatch();

	const onChangeFilter = (filterName: string, filter: string) => {
		dispatch(setFilterValue(filterName, filter));
	};

	return (
		<>
			{filter.length ? (
				filter.map((item, index) => (
					<CustomSelect
						selectedFilter={item.selectedOption}
						key={index}
						optionsList={item.options}
						filterName={item.name}
						onChangeOption={onChangeFilter}
					/>
				))
			) : (
				<SkeletonSelect />
			)}
		</>
	);
};
