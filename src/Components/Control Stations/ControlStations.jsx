import { Navbar } from '../Common/Navbar/Navbar';
import React from 'react'
import { Control_Station } from '../../Util/Control_Station';
import { useState, useEffect } from 'react';
import { getSQLDateTime } from '../../Util/HelperFunctions';
import { axiosPost, axiosGet } from '../../Util/API';
import MaterialTable from "@material-table/core"
import "./ControlStations.scss"

export const ControlStations = () => {
	var [data, setData] = useState([])
	var [reset, setReset] = useState(0)
	var [Production_Systems, setProduction_Systems] = useState([])

	useEffect(() => {
		axiosGet('Control_Stations').then((e) => {
			setData(e.data)
		})
			.catch((err) => {
				console.log(err.message)
			})
	}, [reset])

	useEffect(() => {
		axiosGet('Production_Systems').then((e) => {
			setProduction_Systems(e.data)
		})
			.catch((err) => {
				console.log(err.message)
			})
	}, [])

	function getProductionSystems() {
		let APS = {};
		for (let i = 0; i < Production_Systems.length; i++) {
			APS = {...APS, [Production_Systems[i].production_system_name]: Production_Systems[i].production_system_name};
		}
		return APS;
	}

	const COLS = [
		{ field: "station_name", title: "Station Name" },
		{ field: "production_system_name", title: "Production System Name", lookup: getProductionSystems()},
		{ field: "station_type", title: "Station Type", lookup: {scan: 'scan', form: 'form'}},
		{ field: "bundle_size", title: "Bundle Size" },
		{ field: "date_created", title: "Date Created", editable: "never" }
	]

	return (
		<div className='controlStationsPage'>
			<div className='materialTable'>
				<MaterialTable title='Control Stations'
					data={data}
					columns={COLS}
					options={{
						paging: false,
						pageSize: 5,       // make initial page size
						emptyRowsWhenPaging: false,   // To avoid of having empty rows
						pageSizeOptions: [5, 10, 15, 20],    // rows selection options
						actionsColumnIndex: 5,
						filtering: true
					}}
					editable={{

						onRowAdd: newData =>
							new Promise((resolve, reject) => {

								let brocolli = new Control_Station(
									newData.station_name,
									newData.production_system_name,
									newData.station_type,
									newData.bundle_size,
									getSQLDateTime()
								)

								axiosPost(brocolli, 'Control_Stations').then((r) => {
									console.log(r)
									setReset(reset + 1);
									resolve();
								}).catch((e) => {
									console.log(e)
									console.log('postError')
								})
								setReset(reset + 1);
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
									setReset(reset + 1);
									resolve();
								}).catch((e) => {
									console.log(e)
									console.log('postError')
								})
								setReset(reset + 1);
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
								setReset(reset + 1);
							}),
					}} />
			</div>
		</div>
	)
}
