import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import { cx } from '@linaria/core';
import { LinkStyle } from './styles';

type LinkPropsType = {
	path: string;
	title: string;
};

export const Link: React.FC<LinkPropsType> = ({ path, title }) => {
	return (
		<NavLink className={cx(LinkStyle)} to={path}>
			{title}
		</NavLink>
	);
};
