import React from 'react';
import { Button } from 'src/components/atoms/Button';
import { SkeletonButton } from 'src/components/atoms/Button/SkeletonButton';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { deleteItem } from 'src/store/thunks/technic';

type ConnectedButtonsProps = {
	showModal: (value: boolean) => void;
};

export const ConnectedButtons: React.FC<ConnectedButtonsProps> = ({ showModal }) => {
	const { isFetching, technics } = useAppSelector((state) => state.technicsNode);
	const selectedItem = useAppSelector((state) => state.technicsNode.selectedItem);

	const dispatch = useAppDispatch();

	const deleteItemHandle = () => {
		if (selectedItem) {
			dispatch(deleteItem(selectedItem));
		}
	};

	const item = technics.find((item) => item._id === selectedItem);

	const canBeDeleted = item?.bind || !selectedItem;

	return (
		<>
			{!isFetching ? (
				<>
					<Button disabled={!!selectedItem} onClick={() => showModal(true)}>
						Add
					</Button>
					<Button disabled={!selectedItem} onClick={() => showModal(true)}>
						Edit
					</Button>
					<Button disabled={canBeDeleted} onClick={deleteItemHandle}>
						Delete
					</Button>
				</>
			) : (
				<SkeletonButton count={3} />
			)}
		</>
	);
};
