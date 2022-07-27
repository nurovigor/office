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
			<Tables count={3} />
			<div className={leftBottomBlock}>
				<Tables count={3} direction={'left'} />
			</div>
			<div className={leftMiddleBlock}>
				<Tables count={3} direction={'right'} />
			</div>
			<div className={rightMiddleBlock}>
				<Tables count={3} direction={'left'} />
			</div>
			<div className={rightBottomBlock}>
				<Tables count={3} direction={'right'} />
			</div>
		</div>
	);
};
