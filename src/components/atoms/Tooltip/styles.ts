import { css } from 'linaria';
import { colors } from 'src/components/_settings/_variables';

const paddingBottomPosition = '6px';
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
	box-shadow: rgba(0, 0, 0, 0.25) 0 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
		rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
		rgba(0, 0, 0, 0.09) 0px -3px 5px;

	&::before {
		content: ' ';
		left: 50%;
		top: calc(6px * -1);
		border: 6px solid ${colors.whiteSmokeColor};
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
		margin-left: calc(${paddingBottomPosition} * -1);
		transform: rotate(45deg);
	}

	&.Top {
		top: calc(${paddingTopPosition} * -1);

		&::before {
			top: 95%;
			border-bottom-color: ${colors.whiteSmokeColor};
		}
	}
`;
