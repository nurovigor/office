import React from 'react';
import { Button } from 'src/components/atoms/Button';
import { Container, Btn } from './styles';

type TableHeadItemPropsType = {
	item: string;
	// eslint-disable-next-line no-unused-vars
	callBack: (value: string) => void;
};

export const TableHeadItem: React.FC<TableHeadItemPropsType> = ({ item, callBack }) => {
	return (
		<td title={item} className={Container}>
			<Button onClick={() => callBack(item)} className={Btn}>
				{item}
			</Button>
		</td>
	);
};
