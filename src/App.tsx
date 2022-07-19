import React, { MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from './store/store';
import './App.css';

function App() {
	const count = useSelector(selectors.count);
	const dispatch = useDispatch();

	const increaseCountHandle = (e: MouseEvent<HTMLButtonElement>) => {
		if (e.currentTarget.dataset.set === 'incBtn') {
			dispatch(actions.increment());
		} else {
			dispatch(actions.decrement());
		}
	};

	return (
		<div className='App'>
			<h1>{count}</h1>
			<button data-set='incBtn' onClick={increaseCountHandle}>
				inc+
			</button>
			<button data-set='decBtn' onClick={increaseCountHandle}>
				dec-
			</button>
		</div>
	);
}

export default App;
