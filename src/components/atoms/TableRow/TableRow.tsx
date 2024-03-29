import React from 'react';
import { Nullable, TechnicTypeI } from 'src/common/types/types';
import { Active, Container } from './styles';
import { cx } from '@linaria/core';

type TableRowPropsType = {
	data: TechnicTypeI;
	selectedId: Nullable<string>;
	changeSelectedItem: (itemId: Nullable<string>) => void;
};

export const TableRow: React.FC<TableRowPropsType> = ({ data, selectedId, changeSelectedItem }) => {
	const onHandleClick = () => {
		changeSelectedItem(data._id);
	};

	//const boxRef = useRef<HTMLTableRowElement>(null);

	/*useEffect(() => {
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
	});*/

	return (
		<tbody>
			<tr
				data-testid="table-row"
				className={cx(Container, selectedId === data._id && Active)}
				onClick={onHandleClick}
				//ref={boxRef}
			>
				<td>{data.name}</td>
				<td>{data.type}</td>
				<td data-testid="bind">{data.bind ? 'Yes' : 'No'}</td>
			</tr>
		</tbody>
	);
};
