import React from 'react';
import cn from 'classnames';
import { ButtonStyle } from './styles';

export type ButtonProps = {
	children?: string;
	onClick: () => void;
	icon?: React.ReactElement;
	type?: 'submit' | 'button';
	disabled?: boolean;
	className?: string;
};

// eslint-disable-next-line react/display-name
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { children, onClick, icon, type = 'button', className = '', disabled = false } = props;
	return (
		<button
			ref={ref}
			type={type}
			className={cn(ButtonStyle, className)}
			disabled={disabled}
			onClick={onClick}
		>
			<span>{icon}</span>
			{children}
		</button>
	);
});
