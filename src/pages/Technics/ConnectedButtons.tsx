import React from 'react';
import { Button } from 'src/components/atoms/Button';
import { SkeletonButton } from 'src/components/atoms/Button/SkeletonButton';
import { useAppSelector } from 'src/hooks';

export const ConnectedButtons = () => {
	const technics = useAppSelector((state) => state.technicsNode.technics);

	return (
		<>
			{technics.length ? (
				<>
					<Button>Add</Button>
					<Button disabled={true}>Edit</Button>
					<Button disabled={true}>Delete</Button>
				</>
			) : (
				<SkeletonButton count={3} />
			)}
		</>
	);
};
