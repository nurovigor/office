import { css } from '@linaria/core';

export const tablesBlock = css`
	display: flex;
	width: 100%;

	&[data-position='right'] {
		flex-direction: column;
	}

	&[data-position='left'] {
		flex-direction: column;
	}
`;
