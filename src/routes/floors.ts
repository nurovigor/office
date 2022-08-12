import { OpenSpaceNumber } from '../common/types/types';
// @ts-ignore
import floorOne from 'src/assets/floor1.jpg';
// @ts-ignore
import floorTwo from 'src/assets/floor2.jpg';

export type FloorType = {
	path: string;
	name: string;
	number: number;
	plan: string;
	openSpaceNumbers: OpenSpaceNumber[];
};

export const floors: FloorType[] = [
	{
		path: 'floor1',
		name: 'Floor One',
		number: 1,
		plan: floorOne,
		openSpaceNumbers: [1, 2]
	},
	{
		path: 'floor2',
		name: 'Floor Two',
		number: 2,
		plan: floorTwo,
		openSpaceNumbers: [3, 4]
	}
];
