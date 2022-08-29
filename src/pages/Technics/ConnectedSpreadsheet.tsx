import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { headData, Nullable } from 'src/common/types/types';
import { Spreadsheet } from 'src/components/molecules/Spreadsheet';
import { setSelectedItem, setSortValue } from 'src/store/thunks';
import { SkeletonSpreadsheet } from 'src/components/molecules/Spreadsheet/SkeletonSpreadsheet';
import { ModalWindow } from 'src/components/atoms/ModalWindow';
import { TechnicForm } from 'src/components/atoms/TechnicForm';

const headerData: headData[] = [
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

type ConnectedSpreadsheetProps = {
	isActive: boolean;
	closeModal: (value: boolean) => void;
};

export const ConnectedSpreadsheet: React.FC<ConnectedSpreadsheetProps> = ({
	isActive,
	closeModal
}) => {
	const { technics, sort, selectedItem, isFetching } = useAppSelector(
		(state) => state.technicsNode
	);

	const item = technics.find((item) => item._id === selectedItem);

	const dispatch = useAppDispatch();

	const handleSorting = (name: string, value: string) => {
		dispatch(setSortValue(name, value));
	};

	const handleSetSelectedItem = (id: Nullable<string>) => {
		dispatch(setSelectedItem(id));
	};

	return (
		<>
			{!isFetching ? (
				<Spreadsheet
					theadData={headerData}
					tbodyData={technics}
					selectedItemId={selectedItem}
					changeSelectedItem={handleSetSelectedItem}
					handleSorting={handleSorting}
					sortValues={sort}
				/>
			) : (
				<SkeletonSpreadsheet />
			)}
			{isActive && (
				<ModalWindow title={item ? 'Update' : 'Create'} closeModal={() => closeModal(false)}>
					{item ? (
						<TechnicForm item={item} closeModal={closeModal} />
					) : (
						<TechnicForm closeModal={closeModal} />
					)}
				</ModalWindow>
			)}
		</>
	);
};
