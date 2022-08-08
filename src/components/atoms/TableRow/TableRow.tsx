import React from 'react';

type TableRowPropsType = {
	data: any;
};

export const TableRow: React.FC<TableRowPropsType> = ({ data }) => {
	return (
		<tr>
			<td>{data.name}</td>
			<td>{data.type}</td>
			<td>{data.added}</td>
		</tr>
	);
};
