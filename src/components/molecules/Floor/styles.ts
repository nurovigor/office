import { css } from 'linaria';

const floorBlock = css`
	display: flex;
	justify-content: center;
	align-items: center;

	&[data-floor='1'] {
		background: url('../../../assets/floor1.jpg') no-repeat center;
		background-size: contain;
	}

	&[data-floor='2'] {
		background: url('../../../assets/floor2.jpg') no-repeat center;
		background-size: contain;
	}

	width: 810px;
	position: relative;
`;

const insideBlock = css`
	position: relative;
	width: 79%;
	height: 95%;
`;

export default {
	floorBlock,
	insideBlock
};
