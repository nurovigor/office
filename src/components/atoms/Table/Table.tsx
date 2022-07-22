import React from 'react';
import { tableStyle } from './styles';

type LinkPropsType = {
	callBack: () => void;
};

export const Table: React.FC<LinkPropsType> = ({ callBack }) => {
	return <div className={tableStyle} onClick={callBack}></div>;
};
