import React, { useEffect, useState } from 'react';
import { Spreadsheet } from 'src/components/molecules/Spreadsheet';
import { Button } from 'src/components/atoms/Button';
import { ConnectedSelect } from 'src/pages/Technics/ConnectedSelect';
import { ConnectedPagination } from 'src/pages/Technics/ConnectedPagination';
import { Nullable } from 'src/common/types/types';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getTechnics, setSortValue } from 'src/store/thunks/technic';
import { BtnBlock, Filter, FilterBlock, PaginationBlock, TechnicsBlock } from './styles';

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

export const Technics = () => {
	const { technics, sort } = useAppSelector((state) => state.technicsNode);
	const [selectedItemId, setSelectedItemId] = useState<Nullable<string>>(null);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getTechnics());
	}, []);

	const handleSorting = (name: string, value: string) => {
		dispatch(setSortValue(name, value));
	};

	return (
		<div className={TechnicsBlock}>
			<div className={FilterBlock}>
				<div className={Filter}>
					<ConnectedSelect />
				</div>
				<div className={BtnBlock}>
					<Button>Add</Button>
					<Button>Edit</Button>
					<Button>Delete</Button>
				</div>
			</div>

			<Spreadsheet
				theadData={headerData}
				tbodyData={technics}
				selectedItemId={selectedItemId}
				changeSelectedItem={setSelectedItemId}
				handleSorting={handleSorting}
				sortValues={sort}
			/>
			<div className={PaginationBlock}>
				<ConnectedPagination />
			</div>
		</div>
	);
};
