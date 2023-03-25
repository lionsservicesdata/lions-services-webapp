import { Navbar } from '../Common/Navbar/Navbar';
import React from 'react'
import DisplayTable from '../Common/DisplayTable/DisplayTable';

export const Lots = () => {
	return (
		<div className='lotsPage'>
			<Navbar></Navbar>
			<DisplayTable tableName={'Lots'}></DisplayTable>
			In this page you will be able to generate a new lot

			Once the lot is generated

			Insert bulk a bunch of qr codes

			In order to print QR Codes, Refresh spreadsheet
			
			Go to printer program and print labels
		</div>
	)
}
