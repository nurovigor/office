import { css } from 'linaria';
import { colors } from 'src/components/_settings/_variables';

export const Container = css`
	 {
		box-sizing: border-box;
		cursor: pointer;
		& td {
			width: 300px;
		}
	}
`;

export const Active = css`
	background-color: ${colors.success};
	color: ${colors.white};
`;
