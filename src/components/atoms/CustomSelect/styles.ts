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
	padding: 2px 10px;
	position: relative;
	&:after {
		content: '';
		background-image: url('../../../assets/up-arrow.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		color: ${colors.white};
		width: 30px;
		height: 30px;
		display: flex;
		justify-content: space-between;
		text-align: center;
		transition: all 0.4s ease;
		position: absolute;
		z-index: 100;
		right: 0;
	}
`;

export const List = css`
	position: absolute;
	box-sizing: border-box;
	background-color: ${colors.white};
	z-index: 10;
	top: 21px;
	right: 0;
	list-style: none;
	padding: 0;
	color: ${colors.blackColor};
	width: 150px;
	border: 1px solid ${colors.primaryColor};
`;

export const Active = css`
	&:after {
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
