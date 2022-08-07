import React from 'react';
import { workSpaceOne, bottomBlock, middleBlockOne, middleBlockOTwo } from './styles';
import { Tables } from '../Tables';

export const OpenSpaceThree = () => {
	return (
		<div className={workSpaceOne}>
			<Tables count={5} fromNumber={46} />
			<div className={middleBlockOne}>
				<Tables count={4} direction={'bottom'} fromNumber={59} />
				<Tables count={4} fromNumber={63} />
			</div>
			<div className={middleBlockOTwo}>
				<Tables count={4} direction={'bottom'} fromNumber={51} />
				<Tables count={4} fromNumber={55} />
			</div>
			<div className={bottomBlock}>
				<Tables count={5} direction={'bottom'} fromNumber={67} />
			</div>
		</div>
	);
};
