import { css } from '@linaria/core';

const workSpaceOne = css`
	height: 465px;
	width: 282px;
	position: absolute;
	right: -5px;
	top: 38px;
`;
const bottomBlock = css`
	position: absolute;
	bottom: 2px;
`;

const middleBlockOne = css`
	position: absolute;
	bottom: 95px;
	right: 7px;
	transform: rotate(180deg);
`;

const middleBlockOTwo = css`
	position: absolute;
	top: 115px;
	right: 7px;
	transform: rotate(180deg);
`;

export default {
	workSpaceOne,
	bottomBlock,
	middleBlockOne,
	middleBlockOTwo
};
