import { css } from 'linaria';

const floorBlock = css`
	display: flex;
	justify-content: center;
	align-items: center;
	background: url('../../../assets/floor1.jpg') no-repeat center;
	background-size: contain;
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
