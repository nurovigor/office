import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Office } from './pages/Office';
import { Technics } from './pages/Technics';
import { Header, links } from './components/molecules/Header';
import { Floor } from './components/molecules/Floor';
import './App.css';
import { floors } from './routes/floors';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { appThunk, setAppError } from 'src/store/thunks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const error = useAppSelector((state) => state.appNode.error);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(appThunk());
	}, []);

	const notify = () => toast.error(error, { onClose: () => dispatch(setAppError(null)) });

	useEffect(() => {
		notify();
	}, [error]);

	return (
		<>
			<Header links={links} />
			<Routes>
				<Route path="/office" element={<Office floors={floors} />}>
					{floors.map(({ path, number, openSpaceNumbers, plan }) => (
						<Route
							key={number}
							path={path}
							element={<Floor openSpaceNumbers={openSpaceNumbers} plan={plan} />}
						/>
					))}
				</Route>
				<Route path={'/technics'} element={<Technics />} />
			</Routes>
			<ToastContainer position="bottom-right" />
		</>
	);
}

export default App;
