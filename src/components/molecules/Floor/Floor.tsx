import React, { ReactNode } from 'react';
import styles from './styles';

type FloorOnePropsType = {
	floorNumber: number;
	children: ReactNode;
};

export const Floor: React.FC<FloorOnePropsType> = ({ floorNumber, children }) => {
	return (
		<div className={styles.floorBlock} data-floor={floorNumber}>
			<div className={styles.insideBlock}>{children}</div>
		</div>
	);
};
