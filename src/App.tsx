import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Office } from './pages/Office';
import { Technics } from './pages/Technics';
import { Header, links } from './components/molecules/Header';
import { Floor } from './components/molecules/Floor';
import { OpenSpaceOne } from './components/molecules/OpenSpaceOne';
import { OpenSpaceTwo } from './components/molecules/OpenSpaceTwo';
import { OpenSpaceFour } from './components/molecules/OpenSpaceFour';
import './App.css';

function App() {
	return (
		<>
			<Header links={links} />
			<Routes>
				{/*{routes.map((item, index) => (
					<Route key={index} path={item.path} element={<item.component />} />
				))}*/}
				<Route path={'/'} element={<Office />}>
					<Route
						path={'floor1'}
						element={
							<Floor floorNumber={1}>
								<OpenSpaceOne />
								<OpenSpaceTwo />
							</Floor>
						}
					/>

					<Route
						path={'floor2'}
						element={
							<Floor floorNumber={2}>
								<OpenSpaceOne />
								<OpenSpaceFour />
							</Floor>
						}
					/>
				</Route>
				<Route path={'/technics'} element={<Technics />} />
			</Routes>
		</>
	);
}

export default App;
