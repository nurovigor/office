import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Office } from './pages/Office';
import { Technics } from './pages/Technics';
import { Header, links } from './components/molecules/Header';
import { ConnectedFloor } from 'src/pages/Office/ConnectedFloor';
import { floors } from './routes/floors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
	return (
		<>
			<Header links={links} />
			<Routes>
				<Route path="/office" element={<Office floors={floors} />}>
					{floors.map(({ path, number, openSpaceNumbers, plan }) => (
						<Route
							key={number}
							path={path}
							element={<ConnectedFloor openSpaceNumbers={openSpaceNumbers} plan={plan} />}
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
