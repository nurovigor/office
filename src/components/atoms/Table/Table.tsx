import React from 'react';
import { tableStyle } from './styles';
import { DirectionType } from 'src/types/types';

type LinkPropsType = {
	direction: DirectionType;
};

export const Table: React.FC<LinkPropsType> = ({ direction }) => {
	return <div className={tableStyle} data-direction={direction}></div>;
};
