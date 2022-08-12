import React from 'react';
import { DirectionType } from 'src/common/types/types';
import { useAppSelector } from 'src/hooks';
import { Table } from 'src/components/atoms/Table/Table';

type ConnectedTableProps = {
	direction: DirectionType;
	tableId: string;
};

export const ConnectedTable: React.FC<ConnectedTableProps> = ({ direction, tableId }) => {
	const isAvailable = useAppSelector(
		(state) => state.officeNode.tables[tableId].developer !== null
	);
	return (
		<div>
			<Table direction={direction} isActive={isAvailable} />
		</div>
	);
};
