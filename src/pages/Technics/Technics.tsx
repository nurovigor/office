import React, { useEffect, useState } from 'react';
import { ConnectedSelect } from 'src/pages/Technics/ConnectedSelect';
import { ConnectedPagination } from 'src/pages/Technics/ConnectedPagination';
import { getFilters, getTechnics } from 'src/store/thunks/technic';
import { ConnectedSpreadsheet } from 'src/pages/Technics/ConnectedSpreadsheet';
import { ConnectedButtons } from 'src/pages/Technics/ConnectedButtons';
import { BtnBlock, Filter, FilterBlock, PaginationBlock, TechnicsBlock } from './styles';
import { useAppDispatch } from 'src/hooks';

export const Technics = () => {
	const dispatch = useAppDispatch();
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		dispatch(getTechnics());
		dispatch(getFilters());
	}, []);

	return (
		<div className={TechnicsBlock}>
			<div className={FilterBlock}>
				<div className={Filter}>
					<ConnectedSelect />
				</div>
				<div className={BtnBlock}>
					<ConnectedButtons showModal={setIsActive} />
				</div>
			</div>
			<ConnectedSpreadsheet isActive={isActive} closeModal={setIsActive} />
			<div className={PaginationBlock}>
				<ConnectedPagination />
			</div>
		</div>
	);
};
