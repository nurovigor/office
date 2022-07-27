import { css } from 'linaria';

export const TooltipWrapper = css`
	display: block;
	position: relative;
`;

export const TooltipTip = css`
	position: absolute;
	border-radius: 4px;
	left: 50%;
	transform: translateX(-50%);
	padding: 6px;
	color: black;
	background: #f1f1f1;
	font-size: 14px;
	font-family: sans-serif;
	line-height: 1;
	z-index: 100;
	min-width: 200px;

	&::before {
		content: ' ';
		left: 50%;
		top: calc(6px * -1);
		border: 6px solid #f1f1f1;
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
		margin-left: calc(6px * -1);
		transform: rotate(45deg);
	}

	&.Top {
		top: calc(100px * -1);

		&::before {
			top: 95%;
			border-bottom-color: #f1f1f1;
		}
	}
`;
