import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Detail } from "./Components/Detail/Detail";
import { Home } from "./Components/Home/Home";
import React from 'react';
import "./App.scss";

export const App = () => {
	return (
		<div className='cont'>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/detail" component={Detail} />
				</Switch>
			</BrowserRouter>
		</div>
	)
};