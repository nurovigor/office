import React from 'react';
import { Outlet } from 'react-router-dom';
import { officeBlock } from './styles';
import { Link } from 'src/components/atoms/Link';
import { FloorType } from 'src/routes/floors';

type OfficePropsType = {
	floors: FloorType[];
};

export const Office: React.FC<OfficePropsType> = ({ floors }) => {
	return (
		<div>
			{floors.map(({ path, name }, index) => (
				<Link key={index} path={path} title={name} />
			))}
			<div className={officeBlock}>
				<Outlet />
			</div>
		</div>
	);
};
