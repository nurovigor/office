import React from 'react';
import { workSpaceOne, bottomBlock, middleBlockOne, middleBlockOTwo } from './styles';
import { ConnectedTablesPropsType } from 'src/pages/Office/ConnectedTables';

type OpenSpaceThreeProps = {
	Tables: React.FC<ConnectedTablesPropsType>;
};

export const OpenSpaceThree: React.FC<OpenSpaceThreeProps> = ({ Tables }) => {
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
