import { css } from 'linaria';

const workSpaceFour = css`
	height: 277px;
	width: 335px;
	position: absolute;
	left: 5px;
	bottom: -5px;
`;

const leftBottomBlock = css`
	position: absolute;
	transform: rotate(270deg);
	left: -55px;
	bottom: 56px;
`;

const middleBlock = css`
	position: absolute;
	transform: rotate(270deg);
	left: 77px;
	bottom: 31px;
`;

const rightBottomBlock = css`
	position: absolute;
	transform: rotate(90deg);
	right: -55px;
	bottom: 56px;
`;

export default {
	workSpaceFour,
	leftBottomBlock,
	middleBlock,
	rightBottomBlock
};
