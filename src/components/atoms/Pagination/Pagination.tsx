import React from 'react';
import cn from 'classnames';
import { DOTS, usePagination } from 'src/hooks/usePagination';
import { Container, Item, Dots, Selected, Arrow, Right, Left } from './styles';
import { cx } from '@linaria/core';

type PaginationPropsType = {
	totalCount: number;
	pageSize: number;
	siblingCount?: number;
	currentPage: number;
	// eslint-disable-next-line no-unused-vars
	onPageChange(value: number): void;
};
export const Pagination: React.FC<PaginationPropsType> = ({
	onPageChange,
	totalCount,
	siblingCount = 1,
	currentPage,
	pageSize
}) => {
	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize
	});

	if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	let lastPage = paginationRange && paginationRange[paginationRange.length - 1];

	return (
		<ul className={Container}>
			<li
				onClick={onPrevious}
				className={cn(Item, {
					disabled: currentPage === 1
				})}
			>
				<div className={cn(Arrow, Left)} />
			</li>
			{paginationRange &&
				paginationRange.map((pageNumber, index) => {
					if (pageNumber === DOTS) {
						return (
							<li key={index} className={cn(Item, Dots)}>
								&#8230;
							</li>
						);
					}

					return (
						<li
							key={index}
							className={cx(Item, currentPage === pageNumber && Selected)}
							onClick={() => onPageChange(Number(pageNumber))}
						>
							{pageNumber}
						</li>
					);
				})}
			<li
				onClick={onNext}
				className={cn(Item, {
					disabled: currentPage === lastPage
				})}
			>
				<div className={cn(Arrow, Right)} />
			</li>
			<div></div>
		</ul>
	);
};
