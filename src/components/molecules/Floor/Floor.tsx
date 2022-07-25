import React from 'react';
import { insideBlock, floorBlock } from './styles';
import { OpenSpace } from '../OpenSpace/OpenSpace';
import { OpenSpaceNumber } from 'src/types/types';

export type FloorOnePropsType = {
	plan: string;
	openSpaceNumbers: OpenSpaceNumber[];
};

export const Floor: React.FC<FloorOnePropsType> = ({ openSpaceNumbers, plan }) => {
	return (
		<div className={floorBlock} style={{ backgroundImage: `url(${plan})` }}>
			<div className={insideBlock}>
				{openSpaceNumbers.map((number, index) => (
					<OpenSpace key={index} number={number} />
				))}
			</div>
		</div>
	);
};
