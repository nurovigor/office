import React from 'react';
import { Table } from '../../atoms/Table';
import { tablesBlock } from './styles';
import { Tooltip } from 'src/components/atoms/Tooltip';
import { DirectionType } from 'src/types/types';

type TablesPropsType = {
	count: number;
	direction?: DirectionType;
};

export const Tables: React.FC<TablesPropsType> = ({ count, direction = 'top' }) => {
	return (
		<div className={tablesBlock} data-position={direction}>
			{Array.from({ length: count }).map((item, index) => (
				<Tooltip
					direction={'top'}
					key={index}
					content={
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque cupiditate
							dolor doloremque esse
						</p>
					}
				>
					<div>
						<Table direction={direction} />
					</div>
				</Tooltip>
			))}
		</div>
	);
};
