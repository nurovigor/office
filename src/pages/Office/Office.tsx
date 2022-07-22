import React from 'react';
import { Outlet } from 'react-router-dom';
import { officeBlock } from './styles';
import { Link } from '../../components/atoms/Link';

export const Office = () => {
	return (
		<div>
			<Link path={'/floor1'} title={'Floor one'} />
			<Link path={'/floor2'} title={'Floor two'} />
			<div className={officeBlock}>
				<Outlet />
			</div>
		</div>
	);
};
