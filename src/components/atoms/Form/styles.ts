import { css } from 'linaria';
import { colors } from 'src/components/_settings/_variables';

export const Container = css`
	 {
		margin: 10px 0;
	}
`;

export const FormRow = css`
	 {
		position: relative;
		display: flex;
		align-content: center;
		margin-bottom: 20px;
		box-sizing: border-box;
		width: 100%;
		& label {
			margin: 7px;
			width: 130px;
			font-weight: 700;
		}
	}
`;

export const Input = css`
	 {
		border-radius: 4px;
		padding: 5px 10px;
		font-size: 16px;
		border: 1px solid ${colors.whiteSmokeColor};
		outline: none;
		&.InputError {
			border: 1px solid red;
		}
	}
`;

export const Errors = css`
	 {
		position: absolute;
		left: 150px;
		top: 30px;
		color: ${colors.bloodline};
		font-size: 13px;
	}
`;
