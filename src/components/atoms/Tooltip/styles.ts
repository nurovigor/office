import { css } from '@linaria/core';
import { boxShadow, colors } from 'src/components/_settings/_variables';

const paddingBottomPosition = '40px 20px';
const paddingTopPosition = '100px';

export const TooltipWrapper = css`
	display: block;
	position: relative;
`;

export const TooltipTip = css`
	position: absolute;
	border-radius: 4px;
	left: 50%;
	transform: translateX(-50%);
	padding: ${paddingBottomPosition};
	color: ${colors.blackColor};
	background: ${colors.whiteSmokeColor};
	font-size: 14px;
	font-family: sans-serif;
	line-height: 1;
	z-index: 100;
	min-width: 200px;
	-webkit-box-shadow: ${boxShadow.shadow};
	-moz-box-shadow: ${boxShadow.shadow};
	box-shadow: ${boxShadow.shadow};

	&::before {
		content: ' ';
		left: 49%;
		top: calc(6px * -1);
		border: 7px solid ${colors.whiteSmokeColor};
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
		margin-left: calc(${paddingBottomPosition} * -1);
		transform: rotate(45deg);
	}

	&.Top {
		top: calc(${paddingTopPosition} * -5);

		&::before {
			top: 98%;
			border-bottom-color: ${colors.whiteSmokeColor};
		}
	}
`;
