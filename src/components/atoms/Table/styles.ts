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

	&[data-direction='top'] {
		transform: rotate(0deg);
	}

	&[data-direction='right'] {
		transform: rotate(90deg);
	}

	&[data-direction='bottom'] {
		transform: rotate(180deg);
	}

	&[data-direction='left'] {
		transform: rotate(270deg);
	}
`;
