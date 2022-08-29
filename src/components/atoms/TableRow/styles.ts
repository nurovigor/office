import { css } from '@linaria/core';
import { colors } from 'src/components/_settings/_variables';

export const Container = css`
	 {
		box-sizing: border-box;
		cursor: pointer;
		& td {
			width: 300px;
			border: 1px solid ${colors.whiteSmokeColor};
			padding: 10px;
		}
	}
`;

export const Active = css`
	background-color: ${colors.success};
	color: ${colors.white};
`;
