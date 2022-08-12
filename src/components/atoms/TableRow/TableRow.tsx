import React, { useEffect, useRef } from 'react';
import { Nullable } from 'src/common/types/types';
import { Container, Active } from './styles';
import { cx } from '@linaria/core';

type TableRowPropsType = {
	data: any;
	selectedId: Nullable<string>;
	// eslint-disable-next-line no-unused-vars
	changeSelectedItem: (itemId: Nullable<string>) => void;
};

export const TableRow: React.FC<TableRowPropsType> = ({ data, selectedId, changeSelectedItem }) => {
	const onHandleClick = () => {
		changeSelectedItem(data._id);
	};

	const boxRef = useRef<HTMLTableRowElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			// @ts-ignore
			if (boxRef.current && boxRef.current.contains(event.target)) {
				onHandleClick();
				return;
			}
			changeSelectedItem(null);
		};
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});

	return (
		<tr
			className={cx(Container, selectedId === data._id && Active)}
			onClick={onHandleClick}
			onBlur={() => changeSelectedItem(null)}
			ref={boxRef}
		>
			<td>{data.name}</td>
			<td>{data.type}</td>
			<td>{data.bind ? 'Yes' : 'No'}</td>
		</tr>
	);
};
