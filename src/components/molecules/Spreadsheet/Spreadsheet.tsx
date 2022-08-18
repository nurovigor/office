import React, { useEffect, useState } from 'react';
import { TableHeadItem } from 'src/components/atoms/TableHeadItem';
import { TableRow } from 'src/components/atoms/TableRow';
import { Nullable } from 'src/common/types/types';
import { Table } from 'src/components/molecules/Spreadsheet/styles';

type SpreadsheetPropsType = {
	theadData: any[];
	tbodyData: any[];
	selectedItemId: Nullable<string>;
	changeSelectedItem: (itemId: Nullable<string>) => void;
	handleSorting: (name: string, value: string) => void;
	sortValues: string[];
};

export const Spreadsheet: React.FC<SpreadsheetPropsType> = ({
	theadData,
	tbodyData,
	selectedItemId,
	changeSelectedItem,
	handleSorting,
	sortValues
}) => {
	const [data, setData] = useState(tbodyData);

	useEffect(() => {
		setData(tbodyData);
	}, [tbodyData]);

	return (
		<table className={Table}>
			<thead>
				<tr>
					{theadData.map((item) => {
						return (
							<TableHeadItem
								handleSorting={handleSorting}
								key={item.id}
								item={item}
								sortValues={sortValues}
							/>
						);
					})}
				</tr>
			</thead>
			<tbody>
				{data.map((item) => {
					return (
						<TableRow
							key={item._id}
							data={item}
							selectedId={selectedItemId}
							changeSelectedItem={changeSelectedItem}
						/>
					);
				})}
			</tbody>
		</table>
	);
};
