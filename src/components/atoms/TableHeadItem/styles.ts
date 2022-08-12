import { css } from 'linaria';
import { colors } from 'src/components/_settings/_variables';

export const Container = css`
	background-color: ${colors.primaryColor};
	position: relative;
`;

export const Btn = css`
	 {
		background: transparent;
		border: none;
		cursor: pointer;
		font-weight: 700;
		color: ${colors.white};
		padding: 0;
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
	color: white;
`;
export const Down = css`
	background-image: url('../../../assets/down-arrow.png');
	color: green;
`;
