import React, { useCallback, useState } from 'react';
import { Table } from 'src/components/atoms/Table';
import { Tooltip } from 'src/components/atoms/Tooltip';
import { ModalWindow } from 'src/components/atoms/ModalWindow';
import { FormComponent } from 'src/components/atoms/Form';
import { DirectionType } from 'src/types/types';
import { tablesBlock } from './styles';
import { Info } from 'src/components/atoms/Info';
import { useAppSelector } from 'src/hooks';

type TablesPropsType = {
	count: number;
	direction?: DirectionType;
	fromNumber: number;
};

export const Tables: React.FC<TablesPropsType> = ({ count, direction = 'top', fromNumber }) => {
	const tables = useAppSelector((state) => state.officeNode.tables);
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

	if (!tables.length) {
		return null;
	}

	return (
		<div className={tablesBlock} data-position={direction}>
			{Array.from({ length: count }).map((item, index) => (
				<div key={index}>
					<Tooltip
						direction="top"
						showModal={() => setActiveModalHandle(index)}
						content={<Info table={tables[fromNumber + index - 1]} />}
					>
						<div>
							<Table
								direction={direction}
								isActive={tables[fromNumber + index - 1].developer !== null}
							/>
						</div>
					</Tooltip>
				</div>
			))}

			{isActive && (
				<ModalWindow isShow={isActive} title={'PopUp'} closeModal={() => setIsActive(false)}>
					<FormComponent
						closeModal={() => setIsActive(false)}
						item={tables[fromNumber + activeIndex - 1]}
						suggestions={suggestions}
					/>
				</ModalWindow>
			)}
		</div>
	);
};
