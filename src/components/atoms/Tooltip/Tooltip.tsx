import React, { ReactNode, useState, useRef } from 'react';
import cn from 'classnames';
import { Button } from 'src/components/atoms/Button';
import { useOverflowBottom } from 'src/hooks/useOverflowBottom';
import { useOnClickOutside } from 'src/hooks/useOutsideClick';
import { TooltipTip, TooltipWrapper } from './styles';

type TooltipPropsType = {
	children: ReactNode;
	content: ReactNode | string;
	showModal: () => void;
};

export const Tooltip: React.FC<TooltipPropsType> = ({ children, content, showModal }) => {
	//local states
	const [active, setActive] = useState(false);
	const [isOverflowBottom, setIsOverFlowBottom] = useState<boolean | undefined>(false);
	//refs
	const boxRef = useRef<HTMLDivElement>(null);
	const btnRef = useRef<HTMLButtonElement>(null);

	useOnClickOutside(boxRef, btnRef, setActive, showModal);

	useOverflowBottom(boxRef, setIsOverFlowBottom, [active]);

	const handleTriggerClick = () => {
		setActive(true);
	};

	return (
		<div className={TooltipWrapper}>
			<div data-testid="tooltip-trigger" onClick={handleTriggerClick}>
				{children}
			</div>
			{active && (
				<div
					className={cn(TooltipTip, {
						Top: isOverflowBottom
					})}
					ref={boxRef}
				>
					{content}
					<Button data-testid="show-modal" ref={btnRef} onClick={showModal}>
						Edit
					</Button>
				</div>
			)}
		</div>
	);
};
