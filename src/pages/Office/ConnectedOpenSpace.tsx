import React from 'react';
import { OpenSpaceNumber } from 'src/common/types/types';
import { ConnectedTablesPropsType } from 'src/pages/Office/ConnectedTables';
import { OpenSpace } from 'src/components/molecules/OpenSpace';

type ConnectedOpenSpaceProps = {
	number: OpenSpaceNumber;
	Tables: React.FC<ConnectedTablesPropsType>;
};

export const ConnectedOpenSpace: React.FC<ConnectedOpenSpaceProps> = ({ Tables, number }) => {
	return <OpenSpace number={number} Tables={Tables} />;
};
