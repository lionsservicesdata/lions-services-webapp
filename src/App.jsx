import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import React from 'react';
import "./App.scss";
import { Lots } from "./Components/Lot Management/Lots";
import { ProductionSystems } from "./Components/Production System/ProductionSystems";
import { QRScanner } from "./Components/QR Scanner/QRScanner";
import { ControlStations } from "./Components/Control Stations/ControlStations";


export const App = () => {
	return (
		<div className='cont'>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/QRScanner" component={QRScanner} />
					<Route path="/Lots" component={Lots} />
					<Route path="/ProductionSystems" exact component={ProductionSystems} />
					<Route path="/ControlStations" exact component={ControlStations} />
				</Switch>
			</BrowserRouter>
		</div>
	)
};