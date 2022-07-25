import React from 'react';
import styles from './styles';
import { Tables } from '../Tables';

export const OpenSpaceThree = () => {
	return (
		<div className={styles.workSpaceOne}>
			<Tables count={5} rotateTables={0} />
			<div className={styles.middleBlockOne}>
				<Tables count={4} rotateTables={180} />
				<Tables count={4} rotateTables={0} />
			</div>
			<div className={styles.middleBlockOTwo}>
				<Tables count={4} rotateTables={180} />
				<Tables count={4} rotateTables={0} />
			</div>
			<div className={styles.bottomBlock}>
				<Tables count={5} rotateTables={180} />
			</div>
		</div>
	);
};
