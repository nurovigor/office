import React from 'react';
import { DirectionType } from 'src/common/types/types';
import { useAppSelector } from 'src/hooks';
import { Tables } from 'src/components/molecules/Tables';

export type ConnectedTablesPropsType = {
	count: number;
	direction?: DirectionType;
	fromNumber: number;
};

export const ConnectedTables: React.FC<ConnectedTablesPropsType> = (props) => {
	const ids = useAppSelector((state) => state.officeNode.ids);
	const devs = useAppSelector((state) => state.officeNode.developers);

	return <Tables ids={ids} devs={devs} {...props} />;
};
