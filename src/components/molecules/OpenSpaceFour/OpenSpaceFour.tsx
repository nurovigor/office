import React from 'react';
import styles from './styles';
import { Tables } from '../Tables';

export const OpenSpaceFour = () => {
	return (
		<div className={styles.workSpaceFour}>
			<Tables count={3} rotateTables={0} />
			<div className={styles.leftBottomBlock}>
				<Tables count={3} rotateTables={0} />
			</div>
			<div className={styles.middleBlock}>
				<Tables count={3} rotateTables={180} />
				<Tables count={3} rotateTables={0} />
			</div>
			<div className={styles.rightBottomBlock}>
				<Tables count={3} rotateTables={0} />
			</div>
		</div>
	);
};
