import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { Nullable } from 'src/common/types/types';
import { Spreadsheet } from 'src/components/molecules/Spreadsheet';
import { setSortValue } from 'src/store/thunks';
import { SkeletonSpreadsheet } from 'src/components/molecules/Spreadsheet/SkeletonSpreadsheet';

const headerData = [
	{
		id: '1',
		name: 'Name',
		accessor: 'name'
	},
	{
		id: '2',
		name: 'Type',
		accessor: 'type'
	},
	{
		id: '3',
		name: 'Bounded',
		accessor: 'bind'
	}
];

export const ConnectedSpreadsheet = () => {
	const { technics, sort } = useAppSelector((state) => state.technicsNode);
	const [selectedItemId, setSelectedItemId] = useState<Nullable<string>>(null);

	const dispatch = useAppDispatch();

	const handleSorting = (name: string, value: string) => {
		dispatch(setSortValue(name, value));
	};

	return (
		<div>
			{technics.length ? (
				<Spreadsheet
					theadData={headerData}
					tbodyData={technics}
					selectedItemId={selectedItemId}
					changeSelectedItem={setSelectedItemId}
					handleSorting={handleSorting}
					sortValues={sort}
				/>
			) : (
				<SkeletonSpreadsheet />
			)}
		</div>
	);
};
