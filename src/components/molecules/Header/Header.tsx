import React from 'react';
import { Link } from '../../atoms/Link';
import { headerBlock } from './styles';
import { LinkType } from 'src/types/types';

type HeaderPropsType = {
	links: LinkType[];
};

export const Header: React.FC<HeaderPropsType> = ({ links }) => {
	return (
		<div className={headerBlock}>
			{links.map((link, index) => (
				<Link key={index} path={link.path} title={link.title} />
			))}
		</div>
	);
};
