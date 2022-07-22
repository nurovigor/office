import { css } from 'linaria';
import { ress } from './ress';

export const globals = css`
	:global {
		${ress}
	}
`;
