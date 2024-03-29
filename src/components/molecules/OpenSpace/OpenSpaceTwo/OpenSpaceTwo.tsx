import React from 'react';
import {
	workSpaceTwo,
	topBlocks,
	topLeftBlock,
	topRightBlock,
	leftBottomBlock,
	middleBlock
} from './styles';
import { ConnectedTablesPropsType } from 'src/pages/Office/ConnectedTables';

type OpenSpaceTwoProps = {
	Tables: React.FC<ConnectedTablesPropsType>;
};

export const OpenSpaceTwo: React.FC<OpenSpaceTwoProps> = ({ Tables }) => {
	return (
		<div className={workSpaceTwo}>
			<div className={topBlocks}>
				<div className={topLeftBlock}>
					<Tables count={3} fromNumber={27} />
				</div>
				<div className={topRightBlock}>
					<Tables count={3} fromNumber={30} />
				</div>
			</div>
			<div className={middleBlock}>
				<Tables count={5} direction={'bottom'} fromNumber={33} />
				<Tables count={5} fromNumber={38} />
			</div>
			<div className={leftBottomBlock}>
				<Tables count={3} direction={'left'} fromNumber={43} />
			</div>
		</div>
	);
};
