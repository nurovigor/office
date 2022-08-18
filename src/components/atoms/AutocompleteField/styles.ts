import { css } from 'linaria';
import { boxShadow, colors } from 'src/components/_settings/_variables';

export const Container = css`
	 {
		position: relative;
	}
`;

export const Suggestions = css`
	 {
		position: absolute;
		z-index: 100;
		border-radius: 4px;
		border-top-width: 0;
		background-color: ${colors.whiteSmokeColor};
		box-shadow: ${boxShadow.shadow};
		list-style: none;
		margin-top: 0;
		max-height: 143px;
		overflow-y: auto;
		padding-left: 0;
		width: 100%;
		top: 58px;
		min-height: 100px;
		box-shadow: ${boxShadow.shadow};

		& li {
			font-weight: 400;
			padding: 4px 10px;
		}

		& li:hover {
			background-color: ${colors.observatory};
			color: ${colors.white};
			cursor: pointer;
		}
	}
`;

export const SuggestionActive = css`
	 {
		background-color: ${colors.observatory};
		color: ${colors.white};
		cursor: pointer;
		font-weight: 700;
	}
`;

export const ErrorSuggestion = css`
	 {
		position: absolute;
		left: 1px;
		top: -17px;
		color: ${colors.bloodline};
		font-size: 13px;
		z-index: 200;
	}
`;

export const SelectBlock = css`
	 {
		position: relative;
		box-sizing: border-box;
		min-height: 30px;
		border-radius: 4px;
		padding: 5px 10px;
		font-size: 1rem;
		background-color: ${colors.white};
		width: 228px;

		&:hover {
			cursor: pointer;
		}
	}
`;

export const Input = css`{
  position: absolute;
  z-index: 100;
  width: 100%;
  box-shadow: ${boxShadow.shadow};
}
}`;

export const Delete = css`
	 {
		position: absolute;
		top: 8px;
		right: 9px;
		width: 15px;
		height: 15px;
		border-radius: 8px;
		opacity: 0.3;

		&:hover {
			opacity: 1;
		}

		&:before,
		&:after {
			position: absolute;
			left: 7px;
			content: ' ';
			height: 14px;
			width: 2px;
			background-color: #333;
		}

		&:before {
			transform: rotate(45deg);
		}

		&:after {
			transform: rotate(-45deg);
		}
	}
`;
