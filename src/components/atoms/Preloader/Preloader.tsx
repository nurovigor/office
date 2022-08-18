import React from 'react';
import { Container, Spinner } from './styles';

export const Preloader = () => {
	return (
		<div className={Container}>
			<div className={Spinner}></div>
		</div>
	);
};
