import { css } from '@linaria/core';
import { colors } from 'src/components/_settings/_variables';

export const headerBlock = css`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding: 20px;
	box-shadow: inset 0 -3px 0 0 ${colors.primaryColor};
	margin-bottom: 20px;
`;
