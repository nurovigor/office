import React, { useEffect } from 'react';
import { ConnectedSelect } from 'src/pages/Technics/ConnectedSelect';
import { ConnectedPagination } from 'src/pages/Technics/ConnectedPagination';
import { getTechnics } from 'src/store/thunks/technic';
import { ConnectedSpreadsheet } from 'src/pages/Technics/ConnectedSpreadsheet';
import { ConnectedButtons } from 'src/pages/Technics/ConnectedButtons';
import { useAppDispatch } from 'src/hooks';
import { BtnBlock, Filter, FilterBlock, PaginationBlock, TechnicsBlock } from './styles';

export const Technics = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getTechnics());
	}, []);

	return (
		<div className={TechnicsBlock}>
			<div className={FilterBlock}>
				<div className={Filter}>
					<ConnectedSelect />
				</div>
				<div className={BtnBlock}>
					<ConnectedButtons />
				</div>
			</div>
			<ConnectedSpreadsheet />

			<div className={PaginationBlock}>
				<ConnectedPagination />
			</div>
		</div>
	);
};
