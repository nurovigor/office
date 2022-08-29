import { renderHook } from '@testing-library/react-hooks';
import { useOnClickOutside } from 'src/hooks/useOutsideClick';
import { fireEvent } from '@testing-library/react';

it('should click button', () => {
	const showModal = jest.fn();
	const setActive = jest.fn();

	const btn = document.createElement('button');
	const box = document.createElement('div');
	document.body.appendChild(btn);
	document.body.appendChild(box);

	const btnRef = {
		current: btn
	};

	const boxRef = {
		current: box
	};

	renderHook(() => useOnClickOutside(boxRef, btnRef, setActive, showModal));

	expect(showModal).toHaveBeenCalledTimes(0);
	fireEvent.click(btn);
	expect(showModal).toBeCalled();
});
