import React from 'react';
import { Container } from './styles';

type SkeletonDivProps = {
	width: number;
	height: number;
};

export const SkeletonDiv: React.FC<SkeletonDivProps> = ({ width, height }) => {
	return <div className={Container} style={{ width, height }}></div>;
};
