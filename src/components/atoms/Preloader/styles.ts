import { css } from 'linaria';
import { colors } from 'src/components/_settings/_variables';

export const Container = css`
	width: 100%;
	height: 100vh;
	position: fixed;
	z-index: 1;
`;

export const Spinner = css`
	width: 50px;
	height: 50px;
	border: 8px solid;
	border-color: ${colors.primaryColor} transparent;
	border-radius: 50%;
	animation: spin-anim 1.2s linear infinite;
	position: absolute;
	left: calc(50% - 50px);
	top: calc(50% - 100px);

	@keyframes spin-anim {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
