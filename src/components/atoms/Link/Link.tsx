import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import { LinkStyle } from './styles';
import cn from 'classnames';
type LinkPropsType = {
	path: string;
	title: string;
	isActive: boolean;
};

export const Link: React.FC<LinkPropsType> = ({ path, title, isActive }) => {
	return (
		<NavLink
			className={cn(LinkStyle, {
				Active: isActive
			})}
			to={path}
		>
			{title}
		</NavLink>
	);
};
