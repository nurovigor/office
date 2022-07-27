import React, { useCallback, useState } from 'react';
import { Table } from 'src/components/atoms/Table';
import { Tooltip } from 'src/components/atoms/Tooltip';
import { ModalWindow } from 'src/components/atoms/ModalWindow';
import { DirectionType } from 'src/types/types';
import { tablesBlock } from './styles';

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
				<Tooltip
					direction={'top'}
					key={index}
					showModal={setActiveModalHandle}
					content={
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque cupiditate
							dolor doloremque esse
						</p>
					}
				>
					<div>
						<Table direction={direction} />
					</div>
				</Tooltip>
			))}
			<ModalWindow isShow={isActive} title={'Modal'} closeModal={() => setIsActive(false)}>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur at doloremque
					doloribus ducimus, eius iure labore modi molestiae nam, nobis, odit quis sint tempore
					temporibus veniam voluptas voluptates voluptatum.
				</div>
			</ModalWindow>
		</div>
	);
};
