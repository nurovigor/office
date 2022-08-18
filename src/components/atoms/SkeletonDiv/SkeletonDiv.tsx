import React from 'react';
import { Container } from './styles';

type SkeletonDivProps = {
	width?: number;
	height: number;
	parentWidth?: number;
};

export const SkeletonDiv: React.FC<SkeletonDivProps> = ({ width, height, parentWidth }) => {
	const widthStyle = parentWidth ? `${parentWidth}%` : width;
	return <div className={Container} style={{ minWidth: widthStyle, height }}></div>;
};
