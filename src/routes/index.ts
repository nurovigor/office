import { Office } from '../pages/Office';
import { Technics } from '../pages/Technics';
import { FunctionComponent } from 'react';

export type RouteType = {
	path: string;
	component: FunctionComponent;
};

export const routes: RouteType[] = [
	{
		path: '/',
		component: Office
	},
	{
		path: '/technics',
		component: Technics
	}
];
