import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import React from 'react';
import "./App.scss";
import { Lots } from "./Components/Lot Management/Lots";
import { ProductionSystems } from "./Components/Production System/ProductionSystems";
import { QRScanner } from "./Components/QR Scanner/QRScanner";
import { Testing } from "./Components/Testing/Testing";

export const App = () => {
	return (
		<div className='cont'>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/QRScanner" component={QRScanner} />
					<Route path="/Lots" component={Lots} />
					<Route path="/ProductionSystems" exact component={ProductionSystems} />
					<Route path="/Testing" exact component={Testing} />
				</Switch>
			</BrowserRouter>
		</div>
	)
};