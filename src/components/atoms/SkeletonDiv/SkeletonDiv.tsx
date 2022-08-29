import React from 'react';
import { Container } from './styles';

type SkeletonDivProps = {
	width?: number;
	height: number;
	percentWidth?: number;
};

export const SkeletonDiv: React.FC<SkeletonDivProps> = ({ width, height, percentWidth }) => {
	const widthStyle = percentWidth ? `${percentWidth}%` : width;
	return (
		<div
			data-testid="skeleton"
			className={Container}
			style={{ minWidth: widthStyle, height }}
		></div>
	);
};
