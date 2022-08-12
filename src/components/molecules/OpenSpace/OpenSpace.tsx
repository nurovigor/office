import React from 'react';
import { OpenSpaceTwo } from './OpenSpaceTwo';
import { OpenSpaceFour } from './OpenSpaceFour';
import { OpenSpaceThree } from './OpenSpaceThree';
import { OpenSpaceOne } from 'src/components/molecules/OpenSpace/OpenSpaceOne';
import { OpenSpaceNumber } from 'src/common/types/types';
import { ConnectedTablesPropsType } from 'src/pages/Office/ConnectedTables';

type OpenSpacePropsType = {
	number: OpenSpaceNumber;
	Tables: React.FC<ConnectedTablesPropsType>;
};

export const OpenSpace: React.FC<OpenSpacePropsType> = ({ number, Tables }) => {
	const OneOpenSpace = {
		1: OpenSpaceOne,
		2: OpenSpaceTwo,
		3: OpenSpaceThree,
		4: OpenSpaceFour
	}[number];

	return <OneOpenSpace Tables={Tables} />;
};
