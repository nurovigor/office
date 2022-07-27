import React, { ReactNode, useEffect, useState, useRef } from 'react';
import { TooltipTip, TooltipWrapper } from './styles';
import { DirectionType } from 'src/types/types';
import cn from 'classnames';

type TooltipPropsType = {
	children: ReactNode;
	content: ReactNode | string;
	direction: DirectionType;
};

export const Tooltip: React.FC<TooltipPropsType> = ({ children, content }) => {
	const [active, setActive] = useState(false);
	const [isOverflowBottom, setIsOverFlowBottom] = useState<boolean | undefined>(false);

	const boxRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			// @ts-ignore
			if (boxRef.current && boxRef.current.contains(event.target)) {
				event.stopPropagation();
				return;
			}

			setActive(false);
		};
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});

	useEffect(() => {
		const refRect = boxRef?.current?.getBoundingClientRect();
		setIsOverFlowBottom(refRect && refRect.y + refRect.height > window.innerHeight);
	}, [active]);

	const handleTriggerClick = () => {
		setActive(true);
	};

	return (
		<div className={TooltipWrapper}>
			<div onClick={handleTriggerClick}>{children}</div>
			{active && (
				<div
					className={cn(TooltipTip, {
						Top: isOverflowBottom
					})}
					ref={boxRef}
				>
					{content}
					<button>Click</button>
				</div>
			)}
		</div>
	);
};
