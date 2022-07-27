import React from 'react';
import { Tables } from '../Tables';
import { workSpaceOne, topBlock, middleBlockOne, middleBlockOTwo, bottomBlock } from './styles';

export const OpenSpaceOne = () => {
	return (
		<div className={workSpaceOne}>
			<div className={topBlock}>
				<Tables count={5} />
			</div>
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
