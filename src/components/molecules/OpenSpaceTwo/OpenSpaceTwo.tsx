import React from 'react';
import styles from './styles';
import { Tables } from '../Tables';

export const OpenSpaceTwo = () => {
	return (
		<div className={styles.workSpaceTwo}>
			<div className={styles.topBlocks}>
				<div className={styles.topLeftBlock}>
					<Tables count={3} rotateTables={0} />
				</div>
				<div className={styles.topRightBlock}>
					<Tables count={3} rotateTables={0} />
				</div>
			</div>
			<div className={styles.leftBottomBlock}>
				<Tables count={3} rotateTables={0} />
			</div>
			<div className={styles.middleBlock}>
				<Tables count={5} rotateTables={180} />
				<Tables count={5} rotateTables={0} />
			</div>
		</div>
	);
};
