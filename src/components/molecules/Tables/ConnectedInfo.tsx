import React from 'react';
import { useAppSelector } from 'src/hooks';
import { TableTypeI } from 'src/store/nodes/officeNode';
import { Info } from 'src/components/atoms/Info';

type ConnectedInfoProps = {
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

export const ConnectedInfo: React.FC<ConnectedInfoProps> = ({ tableId }) => {
	const table = useAppSelector((state) => state.officeNode.tables[tableId]);
	let count = Object.keys(table) as (keyof TableTypeI)[];
	count = count.filter((item) => items.includes(item));
	return <Info table={table} count={count} />;
};
