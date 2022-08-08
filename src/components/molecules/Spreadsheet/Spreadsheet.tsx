import React, { useState } from 'react';
import { TableHeadItem } from 'src/components/atoms/TableHeadItem';
import { TableRow } from 'src/components/atoms/TableRow';
import { Table, TableHead, TableBody } from 'src/components/molecules/Spreadsheet/styles';

type SpreadsheetPropsType = {
	theadData: any[];
	tbodyData: any[];
};

export const Spreadsheet: React.FC<SpreadsheetPropsType> = ({ theadData, tbodyData }) => {
	const [data, setData] = useState(tbodyData);

	const compareBy = (key: string) => {
		return function(a: any, b: any) {
			if (a[key] < b[key]) return -1;
			if (a[key] > b[key]) return 1;
			return 0;
		};
	};

	const sortBy = (key: string) => {
		let arrayCopy = [...data];
		arrayCopy.sort(compareBy(key.toLowerCase()));
		setData([...arrayCopy]);
	};

	return (
		<table className={Table}>
			<thead className={TableHead}>
				<tr>
					{theadData.map((head, index) => {
						return <TableHeadItem callBack={sortBy} key={head + index} item={head} />;
					})}
				</tr>
			</thead>
			<tbody className={TableBody}>
				{data.map((item) => {
					return <TableRow key={item.id} data={item} />;
				})}
			</tbody>
		</table>
	);
};
