import React from 'react';
import { TableTypeI } from 'src/store/nodes/officeNode';
import { Name, Property, Row } from './styles';

type InfoPropsType = {
	table: TableTypeI;
	count: (keyof TableTypeI)[];
};

export const Info: React.FC<InfoPropsType> = ({ table, count }) => {
	return (
		<div>
			<div className={Row}>
				<div className={Name}>developer:</div>
				<div className={Property}>
					{table.developer ? `${table.developer.firstName} ${table.developer.lastName}` : 'null'}
				</div>
			</div>
			{count.map((property, index) => (
				<div key={index} className={Row}>
					<div className={Name}>{property}:</div>
					<div className={Property}>{`${table[property]}`}</div>
				</div>
			))}
		</div>
	);
};
