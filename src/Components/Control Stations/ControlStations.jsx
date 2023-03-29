import { Navbar } from '../Common/Navbar/Navbar';
import React from 'react'
import { Control_Station } from '../../Util/Control_Station';
import { useState, useEffect } from 'react';
import { getSQLDateTime } from '../../Util/HelperFunctions';
import { axiosPost, axiosGet } from '../../Util/API';
import MaterialTable from "@material-table/core"

export const ControlStations = () => {
	var [data, setData] = useState([])
	var [reset, setReset] = useState(0)

	useEffect(() => {
		axiosGet('Control_Stations').then((e) => {
			setData(e.data)
		})
			.catch((err) => {
				console.log(err.message)
			})
	}, [reset])

	const COLS = [
		{ field: "station_name", title: "Station Name" },
		{ field: "production_system_name", title: "Production System Name", editable: 'onAdd' },
		{ field: "station_type", title: "Station Type" },
		{ field: "bundle_size", title: "Bundle Size" },
		{ field: "date_created", title: "Date Created" }
	]

	return (
		<div className='controlStationsPage'>
			<Navbar></Navbar>
			<MaterialTable title='Control Stations'
				data={data}
				columns={COLS}
				options={{
					paging: false,
					pageSize: 6,       // make initial page size
					emptyRowsWhenPaging: false,   // To avoid of having empty rows
					pageSizeOptions: [6, 12, 20, 50],    // rows selection options
					actionsColumnIndex: 5
				}}
				editable={{

					onRowAdd: newData =>
						new Promise((resolve, reject) => {

							axiosPost(newData, 'Control_Stations').then((r) => {
								console.log(r)
								setReset(reset++)
								resolve();
							}).catch((e) => {
								console.log(e)
								console.log('postError')
							})
						}),

					onRowUpdate: (newData, oldData) => {
						return new Promise((resolve, reject) => {

							let brocolli = new Control_Station(
								newData.station_name,
								newData.production_system_name,
								newData.station_type,
								newData.bundle_size,
								getSQLDateTime()
							)

							axiosPost(brocolli, 'Update_Control_Stations').then((r) => {
								console.log(r);
								setReset(reset++)
								resolve();
							}).catch((e) => {
								console.log(e)
								console.log('postError')
							})
							setReset(reset++)
						});
					},
					onRowDelete: oldData =>
						new Promise((resolve, reject) => {

							axiosPost(oldData, 'Delete_Control_Stations').then((r) => {
								console.log(r)
								setReset(reset + 1);
								resolve();
							}).catch((e) => {
								console.log(e)
								console.log('postError')
							})


						}),

				}} />
		</div>
	)
}
