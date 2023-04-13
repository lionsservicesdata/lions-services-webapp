import { Navbar } from '../Common/Navbar/Navbar'
import React from 'react'
import { axiosPost, axiosGet } from '../../Util/API'
import { useState, useEffect } from 'react'
import { QR } from '../../Util/QR'
import MaterialTable from "@material-table/core"
import "./QRTable.scss"

export const QRTable = () => {
	var [data, setData] = useState([])
	var [reset, setReset] = useState(0)

	useEffect(() => {
		axiosGet('QR').then((e) => {
			setData(e.data)
		})
			.catch((err) => {
				console.log(err.message)
			})
	}, [reset])

	const COLS = [
		{ field: "id", title: "Id" },
		{ field: "station_name", title: "Station Name" },
		{ field: "lot_number", title: "Lot Number" },
		{ field: "production_system_name", title: "Production System" },
		{ field: "bundle_size", title: "Bundle Size" },
		{ field: "scanned", title: "Scanned" },
		{ field: "date_created", title: "Date Created" },
		{ field: "date_scanned", title: "Date Scanned" },
		{ field: "qr_string", title: "QR String" }
	]

	return (
		<div className='QRPage'>
			<Navbar></Navbar>
			<div className='materialTable'>
				<MaterialTable title='QR Codes'
					data={data}
					columns={COLS}
					options={{
						paging: true,
						pageSize: 25,       // make initial page size
						emptyRowsWhenPaging: false,   // To avoid of having empty rows
						pageSizeOptions: [10, 15, 20, 25, 50, 100, 200],    // rows selection options
						actionsColumnIndex: 4
					}}
					editable={{
						onRowAdd: newData =>
							new Promise((resolve, reject) => {

								axiosPost(newData, 'QR').then((r) => {
									console.log(r)
									setReset(reset++)
									resolve();
								}).catch((e) => {
									console.log(e)
									console.log('postError')
								})
							}),
					}}
				/>
			</div>
		</div>
	)
}
