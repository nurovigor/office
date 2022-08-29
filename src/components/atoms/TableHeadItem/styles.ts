import { css } from '@linaria/core';
import { colors } from 'src/components/_settings/_variables';

export const Container = css`
	background-color: ${colors.primaryColor};
	position: relative;
	border: 1px solid ${colors.whiteSmokeColor};
	padding: 10px;
`;

export const Btn = css`
	 {
		background: transparent;
		border: none;
		cursor: pointer;
		font-weight: 700;
		color: ${colors.white};
		padding: 0;
		margin: 0;
		width: 0;
		font-size: 16px;
	}
`;

export const Sort = css`
	position: absolute;
	top: -1px;
	right: 0;
	width: 40px;
	height: 40px;
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;

	&:hover {
		cursor: pointer;
	}
`;

export const Up = css`
	background-image: url('../../../assets/up-arrow.png');
	width: 40px;
	height: 40px;
	transition: all 0.4s ease;
`;
export const Down = css`
	background-image: url('../../../assets/up-arrow.png');
	width: 40px;
	height: 40px;
	transition: all 0.4s ease;
	transform: rotateZ(-180deg);
`;
