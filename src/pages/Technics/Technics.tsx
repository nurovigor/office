import React from 'react';
import { technicsBlock } from './styles';
import { Spreadsheet } from 'src/components/molecules/Spreadsheet';

const bodyData = [
	{ id: 1, name: 'Asus', type: 'Monitor', added: '08/08/2022' },
	{ id: 2, name: 'Asus Strix', type: 'Monitor', added: '08/08/2022' },
	{ id: 3, name: 'Samsung', type: 'Monitor', added: '08/08/2022' },
	{ id: 4, name: 'Panasonic', type: 'Headphones', added: '08/08/2022' },
	{ id: 5, name: '4tech', type: 'Keyboard', added: '08/08/2022' },
	{ id: 6, name: 'Logitech', type: 'Mouse', added: '08/08/2022' }
];

export const Technics = () => {
	return (
		<div className={technicsBlock}>
			<Spreadsheet theadData={['Name', 'Type', 'Added']} tbodyData={bodyData} />
		</div>
	);
};
