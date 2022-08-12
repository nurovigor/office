import React, { useCallback, useMemo, useState } from 'react';
import { DeveloperType } from 'src/store/nodes/officeNode';
import { Tooltip } from 'src/components/atoms/Tooltip';
import { ModalWindow } from 'src/components/atoms/ModalWindow';
import { ConnectedTable } from 'src/pages/Office/ConnectedTable';
import { ConnectedInfo } from 'src/components/molecules/Tables/ConnectedInfo';
import { ConnectedForm } from 'src/pages/Office/ConnectedForm';
import { DirectionType } from 'src/common/types/types';
import { tablesBlock } from './styles';

type TablesPropsType = {
	count: number;
	direction?: DirectionType;
	fromNumber: number;
	ids: string[];
	devs: DeveloperType[];
};

export const Tables: React.FC<TablesPropsType> = ({
	count,
	direction = 'top',
	fromNumber,
	ids,
	devs
}) => {
	const [isActive, setIsActive] = useState(false);
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const suggestions = useMemo(
		() =>
			devs.map((developer) => ({
				fullName: `${developer.firstName} ${developer.lastName}`,
				id: developer._id
			})),
		[devs]
	);

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
						content={<ConnectedInfo tableId={ids[fromNumber + index - 1]} />}
					>
						<div>
							<ConnectedTable direction={direction} tableId={ids[fromNumber + index - 1]} />
						</div>
					</Tooltip>
				</div>
			))}

			{isActive && (
				<ModalWindow isShow={isActive} title={'PopUp'} closeModal={() => setIsActive(false)}>
					<ConnectedForm
						closeModal={() => setIsActive(false)}
						tableId={ids[fromNumber + activeIndex - 1]}
						suggestions={suggestions}
					/>
				</ModalWindow>
			)}
		</div>
	);
};
