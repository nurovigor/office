import { css } from 'linaria';
import { colors } from 'src/components/_settings/_variables';

export const Table = css`
	 {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
		overflow: hidden;

		& td,
		th {
			border-top: 1px solid ${colors.whiteSmokeColor};
			padding: 10px;
		}

		& td {
			border: 1px solid ${colors.whiteSmokeColor};
		}
	}
`;
