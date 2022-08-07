import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Office } from './pages/Office';
import { Technics } from './pages/Technics';
import { Header, links } from './components/molecules/Header';
import { Floor } from './components/molecules/Floor';
import './App.css';
import { floors } from './routes/floors';
import { useAppDispatch } from 'src/hooks';
import { appThunk } from 'src/store/thunks';

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(appThunk());
	}, []);

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
		</>
	);
}

export default App;
