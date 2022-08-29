import { css } from '@linaria/core';

export const Container = css`
	cursor: progress;
	background: linear-gradient(0.25turn, transparent, #fff, transparent), linear-gradient(#eee, #eee),
		radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
		linear-gradient(#eee, #eee);
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
	animation: loading 1.5s infinite;

	@keyframes loading {
		to {
			background-position: 315px 0, 0 0, 0 190px, 50px 195px;
		}
	}
`;
