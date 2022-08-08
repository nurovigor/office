import React from 'react';
import { DirectionType } from 'src/types/types';
import { tableStyle } from './styles';
import cn from 'classnames';
import { useAppSelector } from 'src/hooks';

type LinkPropsType = {
	direction: DirectionType;
	tableId: string;
};

export const Table: React.FC<LinkPropsType> = ({ direction, tableId }) => {
	const table = useAppSelector((state) => state.officeNode.tables[tableId]);

	return (
		<div
			className={cn(tableStyle, {
				Active: !!table.developer
			})}
			data-direction={direction}
		></div>
	);
};
