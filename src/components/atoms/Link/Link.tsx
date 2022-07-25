import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import { LinkStyle } from './styles';
type LinkPropsType = {
	path: string;
	title: string;
};

export const Link: React.FC<LinkPropsType> = ({ path, title }) => {
	return (
		<NavLink className={LinkStyle} to={path}>
			{title}
		</NavLink>
	);
};
