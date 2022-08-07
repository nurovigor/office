import React from 'react';
import {
	workSpaceFour,
	leftBottomBlock,
	rightBottomBlock,
	rightMiddleBlock,
	leftMiddleBlock
} from './styles';
import { Tables } from '../Tables';

export const OpenSpaceFour = () => {
	return (
		<div className={workSpaceFour}>
			<Tables count={3} fromNumber={72} />
			<div className={leftBottomBlock}>
				<Tables count={3} direction={'left'} fromNumber={75} />
			</div>
			<div className={leftMiddleBlock}>
				<Tables count={3} direction={'right'} fromNumber={78} />
			</div>
			<div className={rightMiddleBlock}>
				<Tables count={3} direction={'left'} fromNumber={81} />
			</div>
			<div className={rightBottomBlock}>
				<Tables count={3} direction={'right'} fromNumber={84} />
			</div>
		</div>
	);
};
