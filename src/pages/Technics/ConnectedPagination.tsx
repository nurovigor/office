import React from 'react';
import { Pagination } from 'src/components/atoms/Pagination/Pagination';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { setCurrentPage } from 'src/store/thunks/technic';
import { SkeletonPagination } from 'src/components/atoms/Pagination/SkeletonPagination';

export const ConnectedPagination = () => {
	const { currentPage, pageSize, totalCountItems } = useAppSelector((state) => state.technicsNode);
	const dispatch = useAppDispatch();

	const changeCurrentPageHandle = (pageNumber: number) => {
		dispatch(setCurrentPage(pageNumber));
	};
	return (
		<div>
			{totalCountItems ? (
				<Pagination
					totalCount={totalCountItems}
					pageSize={pageSize}
					currentPage={currentPage}
					onPageChange={changeCurrentPageHandle}
				/>
			) : (
				<SkeletonPagination />
			)}
		</div>
	);
};
