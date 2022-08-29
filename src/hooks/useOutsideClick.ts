import { useEffect } from 'react';

export const useOnClickOutside = <T = any, S = any>(
	boxRef: T,
	btnRef: S,
	setActive: (value: boolean) => void,
	showModal: () => void
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			// @ts-ignore
			if (boxRef.current && boxRef.current.contains(event.target)) {
				event.stopPropagation();
				// @ts-ignore
				if (event.target === btnRef.current) {
					showModal();
				}
				return;
			}
			setActive(false);
		};
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, [boxRef, btnRef, setActive, showModal]);
};
