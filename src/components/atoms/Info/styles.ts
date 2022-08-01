import { css } from 'linaria';
import { colors } from 'src/components/_settings/_variables';

export const Row = css`
	 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 10px;
	}
`;

export const Name = css`
	 {
		margin-right: 10px;
	}
`;

export const Property = css`
	 {
		border-radius: 4px;
		padding: 5px 10px;
		font-size: 1rem;
		background-color: ${colors.white};
		white-space: nowrap;
	}
`;
