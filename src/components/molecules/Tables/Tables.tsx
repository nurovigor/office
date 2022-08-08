import React, { useCallback, useState } from 'react';
import { Table } from 'src/components/atoms/Table';
import { Tooltip } from 'src/components/atoms/Tooltip';
import { ModalWindow } from 'src/components/atoms/ModalWindow';
import { FormComponent } from 'src/components/atoms/Form';
import { Info } from 'src/components/atoms/Info';
import { useAppSelector } from 'src/hooks';
import { DirectionType } from 'src/types/types';
import { tablesBlock } from './styles';

type TablesPropsType = {
	count: number;
	direction?: DirectionType;
	fromNumber: number;
};

export const Tables: React.FC<TablesPropsType> = ({ count, direction = 'top', fromNumber }) => {
	const ids = useAppSelector((state) => state.officeNode.ids);
	const devs = useAppSelector((state) => state.officeNode.developers);
	const [isActive, setIsActive] = useState(false);
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const suggestions = devs.map((developer) => ({
		fullName: `${developer.firstName} ${developer.lastName}`,
		id: developer._id
	}));

	suggestions.push({ fullName: 'Empty', id: 'null' });

	const setActiveModalHandle = useCallback((idx: number) => {
		setActiveIndex(idx);
		setIsActive(true);
	}, []);

	if (!ids.length) {
		return null;
	}

	return (
		<div className={tablesBlock} data-position={direction}>
			{Array.from({ length: count }).map((item, index) => (
				<div key={index}>
					<Tooltip
						direction="top"
						showModal={() => setActiveModalHandle(index)}
						content={<Info tableId={ids[fromNumber + index - 1]} />}
					>
						<div>
							<Table direction={direction} tableId={ids[fromNumber + index - 1]} />
						</div>
					</Tooltip>
				</div>
			))}

			{isActive && (
				<ModalWindow isShow={isActive} title={'PopUp'} closeModal={() => setIsActive(false)}>
					<FormComponent
						closeModal={() => setIsActive(false)}
						tableId={ids[fromNumber + activeIndex - 1]}
						suggestions={suggestions}
					/>
				</ModalWindow>
			)}
		</div>
	);
};
