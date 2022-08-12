import { css } from 'linaria';
import { colors } from 'src/components/_settings/_variables';

export const LinkStyle = css`
	text-decoration: none;
	color: ${colors.white};
	font-size: 20px;
	background: #1d3557;
	border: none;
	cursor: pointer;
	padding: 5px 10px;
	transition: 0.3s;
	&.Active {
		background: ${colors.success};
	}
	&:hover {
		background-color: ${colors.success};
	}
`;
