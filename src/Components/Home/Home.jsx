import { Navbar } from '../Common/Navbar/Navbar'
import React from 'react'
import './Home.scss'
import { ExcelDateToJSDate } from '../../Util/HelperFunctions'

export const Home = () => {
	const date = 45040
	console.log(ExcelDateToJSDate(date))
	return (
		<div className='homePage'>
			<Navbar></Navbar>

		</div>
	)
}
