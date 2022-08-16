import { css } from 'linaria';
import { colors } from 'src/components/_settings/_variables';

export const ButtonStyle = css`
	 {
		color: ${colors.white};
		width: 100%;
		font-size: 20px;
		background: ${colors.primaryColor};
		border: none;
		cursor: pointer;
		padding: 5px 0;
		margin-top: 20px;
		transition: 0.3s;

		&:hover {
			background-color: ${colors.success};
		}

		&[disabled]:hover {
			background: ${colors.primaryColor};
		}

		&[disabled] {
			cursor: not-allowed;
			opacity: 0.5;
		}
	}
`;

export const SkeletonBlock = css`
	display: flex;

	& div {
		margin-left: 10px;
	}
`;
