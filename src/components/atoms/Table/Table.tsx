import React from 'react';
import cn from 'classnames';
import { DirectionType } from 'src/common/types/types';
import { tableStyle } from './styles';

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
