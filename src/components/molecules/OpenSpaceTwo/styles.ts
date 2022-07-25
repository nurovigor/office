import { css } from 'linaria';

const workSpaceTwo = css`
	height: 276px;
	width: 75%;
	position: absolute;
	bottom: -4px;
	left: 0;
`;

const topBlocks = css`
	position: absolute;
	width: 100%;
`;

const topLeftBlock = css`
	position: absolute;
	left: 0;
`;

const topRightBlock = css`
	position: absolute;
	right: 0;
`;

const leftBottomBlock = css`
	position: absolute;
	transform: rotate(270deg);
	left: -55px;
	bottom: 56px;
`;

const middleBlock = css`
	position: absolute;
	bottom: 45px;
	left: 115px;
`;

export default {
	workSpaceTwo,
	topBlocks,
	topLeftBlock,
	topRightBlock,
	leftBottomBlock,
	middleBlock
};
