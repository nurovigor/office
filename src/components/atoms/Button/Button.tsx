import React, { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';
import cn from 'classnames';
import { ButtonStyle } from './styles';

type DefaultButtonPropsType = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

export type Ref = HTMLButtonElement;

export type Props = DefaultButtonPropsType & {
	children: string;
	icon?: React.ReactElement;
	disabled?: boolean;
};

// eslint-disable-next-line react/display-name
export const Button = forwardRef<Ref, Props>((props, ref) => {
	const { children, icon, disabled, ...rest } = props;
	return (
		<button
			ref={ref}
			className={cn(ButtonStyle, {
				DisabledBtn: disabled
			})}
			{...rest}
		>
			<span>{icon}</span>
			{children}
		</button>
	);
});
