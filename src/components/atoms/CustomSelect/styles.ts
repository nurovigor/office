import { css } from 'linaria';
import { colors } from 'src/components/_settings/_variables';

export const Container = css`
	margin-right: 10px;
	cursor: pointer;
`;

export const Select = css`
  border: 1px solid ${colors.dressBlues};
  background: ${colors.whiteSmokeColor};
  padding: 5px 10px;
	color: ${colors.primaryColor}
	font-weight: 700;
	&:focus-visible{
		outline: none;
	}
`;
