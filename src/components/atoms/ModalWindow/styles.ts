import { css } from 'linaria';
import { boxShadow, colors } from 'src/components/_settings/_variables';

export const Overlay = css`
	 {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1000;
		background-color: ${colors.blackColor};
		opacity: 0.5;
	}
`;

export const Wrapper = css`
	 {
		position: fixed;
		background-color: ${colors.white};
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 50px 30px 50px 50px;
		z-index: 1000;
		min-width: 100px;
		min-height: 50px;
		border-radius: 4px;
		-webkit-box-shadow: ${boxShadow.shadow};
		-moz-box-shadow: ${boxShadow.shadow};
		box-shadow: ${boxShadow.shadow};
	}
`;

export const HeaderModal = css`
	 {
		display: flex;
		position: relative;
	}
`;

export const Title = css`
	 {
		font-size: 22px;
		font-weight: bold;
	}
`;

export const CloseBtn = css`
	 {
		position: absolute;
		right: 0;
		opacity: 0.3;
		cursor: pointer;
		width: 20px;
		height: 20px;

		&:hover {
			opacity: 1;
		}

		&:before,
		&:after {
			position: absolute;
			right: -50%;
			top: -180%;
			content: ' ';
			height: 20px;
			width: 2px;
			background-color: ${colors.darkCharcoal};
		}

		&:before {
			transform: rotate(45deg);
		}

		&:after {
			transform: rotate(-45deg);
		}
	}
`;

export const Content = css`
	 {
		position: relative;
		z-index: 2;
		padding: 10px;
	}
`;
