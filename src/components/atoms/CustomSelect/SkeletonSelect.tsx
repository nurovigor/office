import React from 'react';
import { SkeletonDiv } from 'src/components/atoms/SkeletonDiv';
import { Preloader } from 'src/components/atoms/CustomSelect/styles';

export const SkeletonSelect = () => {
	return (
		<div className={Preloader}>
			<SkeletonDiv width={150} height={33} />
			<SkeletonDiv width={150} height={33} />
			<SkeletonDiv width={150} height={33} />
		</div>
	);
};
