import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { officeBlock, Btn } from './styles';
import { Link } from 'src/components/atoms/Link';
import { FloorType } from 'src/routes/floors';

type OfficePropsType = {
	floors: FloorType[];
};

export const Office: React.FC<OfficePropsType> = ({ floors }) => {
	const { pathname } = useLocation();

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
