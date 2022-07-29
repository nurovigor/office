import { css } from 'linaria';
import { colors } from 'src/components/_settings/_variables';

export const Overlay = css`
	 {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1000;
		background-color: ${colors.blackColor};
		opacity: 0.1;
	}
`;

export const Wrapper = css`
	 {
		position: fixed;
		background-color: ${colors.whiteSmokeColor};
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 50px 50px 25px 50px;
		z-index: 1000;
		min-width: 100px;
		min-height: 50px;
		border-radius: 4px;
	}
`;

export const HeaderModal = css`
	 {
		display: flex;
		position: relative;
		margin-bottom: 10px;
	}
`;

export const Title = css`
	 {
		font-size: 22px;
		font-weight: bold;
		margin: 0 auto;
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
			right: -110%;
			top: -155%;
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
