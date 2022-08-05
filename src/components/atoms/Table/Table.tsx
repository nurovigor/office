import React from 'react';
import { DirectionType } from 'src/types/types';
import { tableStyle } from './styles';
import cn from 'classnames';

type LinkPropsType = {
	direction: DirectionType;
	isActive: boolean;
};

export const Table: React.FC<LinkPropsType> = ({ direction, isActive }) => {
	return (
		<div
			className={cn(tableStyle, {
				Active: isActive
			})}
			data-direction={direction}
		></div>
	);
};
