import { useEffect, useState } from 'react';

export const useBlockPosition = (ref: any) => {
	const [x, setX] = useState<boolean>(false);
	const [y, setY] = useState<boolean>(false);

	useEffect(() => {}, [x, y]);

	const getPosition = () => {
		if (ref.current) {
			setX(
				ref?.current?.getBoundingClientRect().x + ref.current.getBoundingClientRect().height >
					window.innerHeight
			);
			setY(
				ref?.current?.getBoundingClientRect().y + ref.current.getBoundingClientRect().height >
					window.innerHeight
			);
		}
	};

	ref && getPosition();

	return {
		xPosition: x,
		yPosition: y
	};
};
