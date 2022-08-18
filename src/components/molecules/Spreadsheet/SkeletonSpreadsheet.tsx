import React from 'react';
import { SkeletonDiv } from 'src/components/atoms/SkeletonDiv';
import { SpreadsheetBlock } from 'src/pages/Technics/styles';

export const SkeletonSpreadsheet = () => {
	const COUNT_ROWS = 11;

	const arr = Array.from({ length: COUNT_ROWS }, (_, i) => i);

	return (
		<div>
			{arr.map((_, index) => (
				<div key={index} className={SpreadsheetBlock}>
					<SkeletonDiv width={421} height={37} />
					<SkeletonDiv width={421} height={37} />
					<SkeletonDiv width={421} height={37} />
				</div>
			))}
		</div>
	);
};
