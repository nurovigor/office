import { useEffect } from 'react';

export const useOverflowBottom = (ref: any, callback: any, dependents: any[]) => {
	useEffect(() => {
		const refRect = ref?.current?.getBoundingClientRect();
		callback(refRect && refRect.y + refRect.height > window.innerHeight);
	}, [...dependents, callback]);
};
