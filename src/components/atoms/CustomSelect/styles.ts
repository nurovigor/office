import { css } from 'linaria';
import { colors } from 'src/components/_settings/_variables';

/*export const Container = css`
	margin-right: 10px;
	cursor: pointer;
`;

export const Select = css`
  border: 1px solid ${colors.dressBlues};
  background: ${colors.whiteSmokeColor};
  padding: 5px 10px;
	color: ${colors.primaryColor}
	font-weight: 700;
	&:focus-visible{
		outline: none;
	}
`;*/

export const Container = css`
	margin-right: 10px;
	cursor: pointer;
	width: 150px;
`;

export const Select = css`
	height: 29px;
	background-color: ${colors.primaryColor};
	color: ${colors.white};
	font-size: 13px;
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2px;
	&:before {
		content: '↑';
		color: ${colors.white};
		width: 20px;
		height: 20px;
		text-align: center;
		position: absolute;
		right: 0;
		top: 7px;
		transition: all 0.4s ease;
	}
`;

export const List = css`
	position: absolute;
	box-sizing: border-box;
	background-color: ${colors.white};
	z-index: 10;
	top: 21px;
	list-style: none;
	padding: 0;
	color: ${colors.blackColor};
	width: 150px;
	border: 1px solid ${colors.primaryColor};
`;

export const Active = css`
	&:before {
		transform: rotateZ(-180deg);
	}
`;

export const Opt = css`
	padding: 10px;
	&:hover {
		background-color: ${colors.success};
		color: ${colors.white};
	}
`;
