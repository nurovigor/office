import React from 'react';
import { Tables } from '../Tables';
import { workSpaceOne, topBlock, middleBlockOne, middleBlockOTwo, bottomBlock } from './styles';

export const OpenSpaceOne = () => {
	return (
		<div className={workSpaceOne}>
			<div className={topBlock}>
				<Tables count={5} fromNumber={1} />
			</div>
			<div className={middleBlockOne}>
				<Tables count={4} direction={'bottom'} fromNumber={14} />
				<Tables count={4} fromNumber={18} />
			</div>
			<div className={middleBlockOTwo}>
				<Tables count={4} direction={'bottom'} fromNumber={6} />
				<Tables count={4} fromNumber={10} />
			</div>
			<div className={bottomBlock}>
				<Tables count={5} direction={'bottom'} fromNumber={22} />
			</div>
		</div>
	);
};
