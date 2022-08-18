import { css } from 'linaria';

export const Container = css`
	 {
		display: flex;
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
`;

export const Item = css`
	height: 32px;
	text-align: center;
	margin: auto 4px;
	display: flex;
	align-items: center;
	border-radius: 16px;
	font-size: 13px;
	min-width: 32px;
	justify-content: center;

	&:hover {
		background-color: rgba(0, 0, 0, 0.04);
		cursor: pointer;
	}

	&.disabled {
		pointer-events: none;
		opacity: 0.5;
	}
`;

export const Dots = css`
	&:hover {
		background-color: transparent;
		cursor: default;
	}
`;

export const Selected = css`
	background-color: rgba(0, 0, 0, 0.08);
`;

export const Arrow = css`
	&::before {
		position: relative;
		content: '';
		display: flex;
		width: 3px;
		height: 3px;
		border-right: 0.12em solid rgba(0, 0, 0, 0.87);
		border-top: 0.12em solid rgba(0, 0, 0, 0.87);
	}
`;

export const Left = css`
	transform: rotate(-135deg) translate(-50%);
`;

export const Right = css`
	transform: rotate(45deg);
`;
