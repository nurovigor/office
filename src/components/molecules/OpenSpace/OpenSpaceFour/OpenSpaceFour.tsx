import React from 'react';
import {
	leftBottomBlock,
	leftMiddleBlock,
	rightBottomBlock,
	rightMiddleBlock,
	workSpaceFour
} from './styles';
import { ConnectedTablesPropsType } from 'src/pages/Office/ConnectedTables';

type OpenSpaceFourProps = {
	Tables: React.FC<ConnectedTablesPropsType>;
};

export const OpenSpaceFour: React.FC<OpenSpaceFourProps> = ({ Tables }) => {
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
