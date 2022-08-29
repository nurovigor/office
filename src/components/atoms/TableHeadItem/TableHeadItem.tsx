import React, { useState } from 'react';
import { cx } from '@linaria/core';
import { Button } from 'src/components/atoms/Button';
import { headData } from 'src/common/types/types';
import { Btn, Container, Sort, Up, Down } from './styles';

type TableHeadItemPropsType = {
	item: headData[];
	handleSorting: (sortName: string, value: string) => void;
	sortValues: string[];
};

export const TableHeadItem: React.FC<TableHeadItemPropsType> = ({
	item,
	handleSorting,
	sortValues
}) => {
	const [sortField, setSortField] = useState('');
	const [order, setOrder] = useState('asc');

	const handleSortingChange = (accessor: string) => {
		const sortOrder = accessor === sortField && order === 'asc' ? 'desc' : 'asc';
		setSortField(accessor);
		setOrder(sortOrder);
		handleSorting(accessor, accessor === sortField && order === 'asc' ? 'desc' : 'asc');
	};

	return (
		<thead>
			<tr>
				{item.map((el) => (
					<th key={el.id} title={el.name} className={cx(Container)}>
						<Button onClick={() => handleSortingChange(el.accessor)} className={Btn}>
							{el.name}
						</Button>
						<div
							data-testid="arrow-filter"
							className={cx(
								Sort,
								sortValues[0] === el.accessor && order === 'asc' && Up,
								sortValues[0] === el.accessor && order === 'desc' && Down
							)}
						/>
					</th>
				))}
			</tr>
		</thead>
	);
};
