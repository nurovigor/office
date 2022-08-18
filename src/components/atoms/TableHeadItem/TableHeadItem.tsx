import React, { useState } from 'react';
import { Button } from 'src/components/atoms/Button';
import { Btn, Container, Sort, Up, Down } from './styles';
import { cx } from '@linaria/core';

type TableHeadItemPropsType = {
	item: any;
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
		handleSorting(accessor, sortOrder);
	};

	return (
		<td title={item.name} className={cx(Container)}>
			<Button onClick={() => handleSortingChange(item.accessor)} className={Btn}>
				{item.name}
			</Button>
			<div
				className={cx(
					Sort,
					sortValues[0] === item.accessor && order === 'asc' && Up,
					sortValues[0] === item.accessor && order === 'desc' && Down
				)}
			/>
		</td>
	);
};
