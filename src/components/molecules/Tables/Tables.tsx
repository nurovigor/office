import React, { useCallback, useState } from 'react';
import { Table } from 'src/components/atoms/Table';
import { Tooltip } from 'src/components/atoms/Tooltip';
import { ModalWindow } from 'src/components/atoms/ModalWindow';
import { FormComponent } from 'src/components/atoms/Form';
import { DirectionType } from 'src/types/types';
import { tablesBlock } from './styles';
import { Info } from 'src/components/atoms/Info';

const developer = {
	developer: 'Ken',
	pc: 'Mac Mini',
	monitor: 'Apple display',
	keyboard: 'Magic-keyboard',
	mouse: 'Magic-mouse',
	microphone: 'no',
	headphones: 'AirPods Max',
	camera: 'no'
};

type TablesPropsType = {
	count: number;
	direction?: DirectionType;
};

export const Tables: React.FC<TablesPropsType> = ({ count, direction = 'top' }) => {
	const [isActive, setIsActive] = useState(false);

	const setActiveModalHandle = useCallback(() => {
		setIsActive(true);
	}, []);

	return (
		<div className={tablesBlock} data-position={direction}>
			{Array.from({ length: count }).map((item, index) => (
				<div key={index}>
					<Tooltip
						direction="top"
						showModal={setActiveModalHandle}
						content={<Info infoData={developer} />}
					>
						<div>
							<Table direction={direction} />
						</div>
					</Tooltip>
					{isActive && (
						<ModalWindow isShow={isActive} title={'PopUp'} closeModal={() => setIsActive(false)}>
							<FormComponent item={developer} />
						</ModalWindow>
					)}
				</div>
			))}
		</div>
	);
};
