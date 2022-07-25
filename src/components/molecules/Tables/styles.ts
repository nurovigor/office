import { css } from 'linaria';

const tablesBlock = css`
	display: flex;
	width: 100%;

	&[data-rotate='180'] {
		transform: rotate(180deg);
	}
`;

export default {
	tablesBlock
};
