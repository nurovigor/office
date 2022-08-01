import React from 'react';
import { FormPropsI } from 'src/components/atoms/Form/FormComponent';
import { Row, Name, Property } from './styles';

type InfoPropsType = {
	infoData: FormPropsI;
};

export const Info: React.FC<InfoPropsType> = ({ infoData }) => {
	const count = Object.keys(infoData) as (keyof typeof infoData)[];

	return (
		<div>
			{count.map((property, index) => (
				<div key={index} className={Row}>
					<div className={Name}>{property}:</div>
					<div className={Property}>{infoData[property]}</div>
				</div>
			))}
		</div>
	);
};
