import React from 'react';
import { insideBlock, floorBlock } from './styles';

export type FloorOnePropsType = {
	plan: string;
	children: React.ReactNode;
};

export const Floor: React.FC<FloorOnePropsType> = ({ plan, children }) => {
	return (
		<div className={floorBlock} style={{ backgroundImage: `url(${plan})` }}>
			<div className={insideBlock}>{children}</div>
		</div>
	);
};
