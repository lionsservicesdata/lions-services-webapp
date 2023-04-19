import MaterialTable from '@material-table/core'
import { Navbar } from '../Common/Navbar/Navbar'
import React from 'react'

export const Home = () => {
	return (
		<div className='homePage'>
			<Navbar></Navbar>
			<MaterialTable/>
		</div>
	)
}
