import React, { FC } from 'react';
import { OpenSpaceNumber } from 'src/common/types/types';
import { Floor } from 'src/components/molecules/Floor';
import { ConnectedTables } from 'src/pages/Office/ConnectedTables';
import { ConnectedOpenSpace } from 'src/pages/Office/ConnectedOpenSpace';

type ConnectedFloorOneProps = {
	plan: string;
	openSpaceNumbers: OpenSpaceNumber[];
};

export const ConnectedFloor: FC<ConnectedFloorOneProps> = ({ openSpaceNumbers, plan }) => {
	return (
		<Floor plan={plan}>
			{openSpaceNumbers.map((number, index) => (
				<ConnectedOpenSpace key={index} number={number} Tables={ConnectedTables} />
			))}
		</Floor>
	);
};
