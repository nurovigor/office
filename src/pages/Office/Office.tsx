import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Link } from 'src/components/atoms/Link';
import { FloorType } from 'src/routes/floors';
import { getTablesData } from 'src/store/thunks/tables';
import { useAppDispatch } from 'src/hooks';
import { Btn, officeBlock } from './styles';

type OfficePropsType = {
	floors: FloorType[];
};

export const Office: React.FC<OfficePropsType> = ({ floors }) => {
	const { pathname } = useLocation();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getTablesData());
	}, []);

	return (
		<div>
			<div className={Btn}>
				{floors.map(({ path, name }, index) => (
					<Link key={index} isActive={pathname.indexOf(path) > -1} path={path} title={name} />
				))}
			</div>
			<div className={officeBlock}>
				<Outlet />
			</div>
		</div>
	);
};
