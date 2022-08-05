import React from 'react';
import { Link } from '../../atoms/Link';
import { headerBlock } from './styles';
import { LinkType } from 'src/types/types';
import { useLocation } from 'react-router-dom';

type HeaderPropsType = {
	links: LinkType[];
};

export const Header: React.FC<HeaderPropsType> = ({ links }) => {
	const { pathname } = useLocation();

	return (
		<div className={headerBlock}>
			{links.map((link, index) => (
				<Link
					isActive={pathname.indexOf(link.path) > -1}
					key={index}
					path={link.path}
					title={link.title}
				/>
			))}
		</div>
	);
};
