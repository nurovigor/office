import { Office } from '../pages/Office';
import { Technics } from '../pages/Technics';
import { FunctionComponent } from 'react';

export type RouteType = {
	path: string;
	component: FunctionComponent | any;
};

export const routes: RouteType[] = [
	{
		path: '/office',
		component: Office
	},
	{
		path: '/technics',
		component: Technics
	}
];
