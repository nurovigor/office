import React from 'react';
import { SkeletonDiv } from 'src/components/atoms/SkeletonDiv';
import { SkeletonBlock } from './styles';

type SkeletonButtonProps = {
	count: number;
};

export const SkeletonButton: React.FC<SkeletonButtonProps> = ({ count }) => {
	const arr = Array.from({ length: count }, (_, i) => i);
	return (
		<div className={SkeletonBlock}>
			{arr.map((_, index) => (
				<SkeletonDiv key={index} width={50} height={30} />
			))}
		</div>
	);
};
