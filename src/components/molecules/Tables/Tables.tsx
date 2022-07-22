import React, { useCallback } from 'react';
import { Table } from '../../atoms/Table';
import styles from './styles';

type RotateType = 0 | 180;

type TablesPropsType = {
	count: number;
	rotateTables: RotateType;
};

export const Tables: React.FC<TablesPropsType> = ({ count, rotateTables }) => {
	const onClickHandle = useCallback(() => {
		alert('Test');
	}, [alert]);

	return (
		<div className={styles.tablesBlock} data-rotate={rotateTables}>
			{Array.from({ length: count }).map((item, index) => (
				<Table callBack={onClickHandle} key={index} />
			))}
		</div>
	);
};
