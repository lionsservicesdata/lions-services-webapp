import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import React from 'react';
import "./App.scss";
import { Lots } from "./Components/Lot Management/Lots";
import { ProductionSystems } from "./Components/Production System/ProductionSystems";
import { QRScanner } from "./Components/QR Scanner/QRScanner";
import { ControlStations } from "./Components/Control Stations/ControlStations";
import { QRTable } from "./Components/QR Table/QRTable";

export const App = () => {
	return (
		<div className='cont'>
			<BrowserRouter>
				<Switch>
					<Route path="/" component={QRScanner} />
				</Switch>
			</BrowserRouter>
		</div>
	)
};