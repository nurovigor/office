import React from 'react';
import { Name, Property, Row } from './styles';
import { TableTypeI } from 'src/store/nodes/officeNode';
import { useAppSelector } from 'src/hooks';

type InfoPropsType = {
	tableId: string;
};

const items = [
	'number',
	'openSpaceNumber',
	'pc',
	'monitor',
	'keyboard',
	'mouse',
	'microphone',
	'headphones',
	'camera'
];

export const Info: React.FC<InfoPropsType> = ({ tableId }) => {
	const table = useAppSelector((state) => state.officeNode.tables[tableId]);
	let count = Object.keys(table) as (keyof TableTypeI)[];
	count = count.filter((item) => items.includes(item));

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
