import { useRef, useEffect } from 'react';

export default function useOnChange(cb) {
	const isFirstRun = useRef(true);
	useEffect(() => {
		if (isFirstRun.current) {
			isFirstRun.current = false;
			return;
		}
		cb();
	}, [cb]);
}
