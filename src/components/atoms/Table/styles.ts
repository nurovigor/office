import { css } from 'linaria';

export const tableStyle = css`
	width: 55px;
	height: 51px;
	background: url('../../../assets/table.png') no-repeat center;
	background-size: contain;
	cursor: pointer;

	&:hover {
		background-image: url('../../../assets/activeTable.png');
	}
`;
