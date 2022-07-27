import React from 'react';
import { OpenSpaceTwo } from '../OpenSpaceTwo';
import { OpenSpaceFour } from '../OpenSpaceFour';
import { OpenSpaceThree } from '../OpenSpaceThree';
import { OpenSpaceOne } from 'src/components/molecules/OpenSpaceOne';
import { OpenSpaceNumber } from 'src/types/types';

type OpenSpacePropsType = {
	number: OpenSpaceNumber;
};

export const OpenSpace: React.FC<OpenSpacePropsType> = ({ number }) => {
	const OneOpenSpace = {
		1: OpenSpaceOne,
		2: OpenSpaceTwo,
		3: OpenSpaceThree,
		4: OpenSpaceFour
	}[number];

	return <OneOpenSpace />;
};
