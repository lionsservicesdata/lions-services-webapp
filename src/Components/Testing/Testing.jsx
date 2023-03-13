import { Navbar } from '../Common/Navbar/Navbar';
import React from 'react'

export const Testing = () => {
	return (
		<div className='testingPage'>
			<Navbar></Navbar>
			<form>
				<label>First name:</label>
					<input type="text" id="fname" name="fname"/>
				<br/>
				<label>Last name:</label>
					<input type="text" id="lname" name="lname"/>
				<input type="submit" value="Submit"/>
			</form>
		</div>
	)
}
