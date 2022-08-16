import { css } from 'linaria';
import { colors } from 'src/components/_settings/_variables';

export const TechnicsBlock = css`
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const FilterBlock = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
`;

export const Filter = css`
	margin-bottom: 10px;
	display: flex;
`;

export const BtnBlock = css`
	position: absolute;
	width: 100px;
	display: flex;
	right: 80px;
	bottom: 10px;

	& button {
		padding: 7px 10px;
		font-size: 13px;
		font-weight: 700;
		margin-left: 10px;
		transition: 0.3s;
		border-radius: 0;

		&:hover {
			background-color: ${colors.success};
		}
	}
`;

export const PaginationBlock = css`
	position: absolute;
	bottom: -65px;
	right: 20px;
`;

export const SpreadsheetBlock = css`
	display: flex;
	& div {
		margin: 1px;
	}
`;
