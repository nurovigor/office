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

export const TableHead = css`
	 {
		background-color: ${colors.primaryColor};
	}
`;

export const TableBody = css`
	 {
		& tr:nth-of-type(even) td {
			background-color: #cccee6;
		}
	}
`;
