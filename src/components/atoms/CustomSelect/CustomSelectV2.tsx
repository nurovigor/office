import React, { useEffect, useRef, useState } from 'react';
import { Active, Container, List, Opt, Select } from './styles';
import { cx } from '@linaria/core';

type CustomSelectV2Props = {
	optionsList: string[];
	onChangeOption: (filterName: string, option: string) => void;
	filterName: string;
	selectedFilter: string;
};

export const CustomSelectV2: React.FC<CustomSelectV2Props> = ({
	optionsList,
	selectedFilter,
	filterName,
	onChangeOption
}) => {
	const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);

	const ref = useRef<HTMLTableRowElement>(null);

	useEffect(() => {
		const checkIfClickedOutside = (e: MouseEvent) => {
			// @ts-ignore
			if (isOptionsOpen && ref.current && !ref.current.contains(e.target)) {
				setIsOptionsOpen(false);
			}
		};

		document.addEventListener('mousedown', checkIfClickedOutside);

		return () => {
			document.removeEventListener('mousedown', checkIfClickedOutside);
		};
	}, [isOptionsOpen]);

	const onClickHandle = () => {
		setIsOptionsOpen(!isOptionsOpen);
	};

	return (
		<div className={Container} ref={ref}>
			<div onClick={onClickHandle} className={cx(Select, isOptionsOpen && Active)}>
				{selectedFilter ? selectedFilter : `Filter by ${filterName}`}
				{isOptionsOpen && (
					<ul className={List}>
						<li className={Opt} onClick={() => onChangeOption(filterName, '')}>
							Filter by {filterName}
						</li>
						{optionsList.map((option, index) => (
							<li className={Opt} key={index} onClick={() => onChangeOption(filterName, option)}>
								{option}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
