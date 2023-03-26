import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'
import React from 'react'
import './Navbar.scss'


export const Navbar = () => {
	return (
		<div className='navbar'>
			<ul className='navigation'>
				<li><Link to={"/"}><Button text = "Home" /></Link></li>
				<li><Link to={"/QRScanner"}><Button text = "QRScanner" /></Link></li>
				<li><Link to={"/Lots"}><Button text = "Lots" /></Link></li>
				<li><Link to={"/ProductionSystems"}><Button text = "Production Systems" /></Link></li>
				<li><Link to={"/ControlStations"}><Button text = "Control Stations" /></Link></li>
				<li><Link to={"/Testing"}><Button text = "Testing" /></Link></li>
			</ul>
		</div>
	)
}
