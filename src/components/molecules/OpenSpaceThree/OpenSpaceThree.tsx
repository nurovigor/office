import React from 'react';
import { workSpaceOne, bottomBlock, middleBlockOne, middleBlockOTwo } from './styles';
import { Tables } from '../Tables';

export const OpenSpaceThree = () => {
	return (
		<div className={workSpaceOne}>
			<Tables count={5} />
			<div className={middleBlockOne}>
				<Tables count={4} direction={'bottom'} />
				<Tables count={4} />
			</div>
			<div className={middleBlockOTwo}>
				<Tables count={4} direction={'bottom'} />
				<Tables count={4} />
			</div>
			<div className={bottomBlock}>
				<Tables count={5} direction={'bottom'} />
			</div>
		</div>
	);
};
