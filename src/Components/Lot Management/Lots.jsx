import { Navbar } from '../Common/Navbar/Navbar';
import React from 'react'
import DisplayTable from '../Common/DisplayTable/DisplayTable';
import { InputField } from '../Common/InputField/InputField';
import { Lot } from '../../Util/Lot';
import { getSQLDateTime } from '../../Util/HelperFunctions';
import { axiosGet, axiosPost } from '../../Util/API';
import { useEffect, useState } from 'react';
import { QR } from '../../Util/QR';
import MaterialTable from "@material-table/core"

export const Lots = () => {
	var stations = getTable('Control_Stations')
	var [maxID, setMaxID] = useState(0)
	var [reset, setReset] = useState(0)
	var [data, setData] = useState([])

	useEffect(() => {
		axiosGet('Lots').then((e) => {
			setData(e.data)
		})
			.catch((err) => {
				console.log(err.message)
			})
	}, [reset])

	function getTable(tableName) {

		const [table, setTable] = useState([{}]);

		useEffect(() => {
			axiosGet(tableName).then((e) => {
				setTable(e.data)
			})
				.catch((err) => {
					console.log(err.message)
				})
		}, [])

		return (table)
	}

	const COLS = [
		{ field: "production_system_name", title: "Production System Name", editable: 'onAdd' },
		{ field: "lot_number", title: "Lot Number" },
		{ field: "line_number", title: "Line Number" },
		{ field: "order_ref", title: "Order Ref" },
		{ field: "date_entered", title: "Date Entered" },
		{ field: "order_date", title: "Order Date" },
		{ field: "lot_date", title: "Lot Date" },
		{ field: "due_date", title: "Due Date" },
		{ field: "customer", title: "customer"},
		{ field: "customer_name", title: "customer_name"},
		{ field: "is_printed", title: "Printed"}
	]

	const getMaxID = () => {
		axiosGet('MaxID').then((r) => {
			setMaxID(r.data[0][""])
		}).catch((e) => {
			console.log(e)
			console.log('postError')
		})
	}

	const createQRLot = (dataProp) => {
		console.log(stations)
		var system_stations = []
		var Station_Data = []
		stations.forEach(element => {
			if (element.production_system_name == dataProp.production_system_name && element.station_type == 'scan') {
				system_stations.push(element)
				Station_Data.push([element.station_name, dataProp.lot_number, dataProp.order_size / element.bundle_size, element.bundle_size])
			}

		})

		getMaxID()
		var count = maxID
		for (let i = 0; i < system_stations.length; i++) {
			for (let j = 0; j < Station_Data[i][2]; j++) {
				count = count + 1
				var nthQR = new QR(
					count,
					Station_Data[i][0],
					dataProp.lot_number,
					dataProp.production_system_name,
					Station_Data[i][3],
					0,
					getSQLDateTime(),
					'1900-01-01 00:00:00',
					dataProp.production_system_name + '-' + dataProp.lot_number + '-' + Station_Data[i][0] + '-' + count
				)

				axiosPost(nthQR, 'QR').then((r) => {
					console.log(r)
				}).catch((e) => {
					console.log(e)
					console.log('postError')
				});
			}
		}
	}

	return (
		<div className='lotsPage'>
			<Navbar></Navbar>
			
			<MaterialTable title='Control Stations'
				data={data}
				columns={COLS}
				options={{
					paging: false,
					pageSize: 6,       // make initial page size
					emptyRowsWhenPaging: false,   // To avoid of having empty rows
					pageSizeOptions: [6, 12, 20, 50],    // rows selection options
					actionsColumnIndex: 12
				}}
				editable={{

					onRowAdd: newData =>
						new Promise((resolve, reject) => {
							
							let brocolli = new Lot(
								newData.production_system_name,
								newData.lot_number,
								newData.line_number,
								newData.order_ref,
								newData.order_size,
								getSQLDateTime(),
								newData.order_date,
								newData.lot_date,
								newData.due_date,
								newData.customer,
								newData.customer_name,
								newData.is_printed
							)

							axiosPost(newData, 'Lots').then((r) => {
								console.log(r)
								setReset(reset + 1)
								console.log('HellowS')
								createQRLot(brocolli)
								resolve();
							}).catch((e) => {
								console.log(e)
								console.log('postError')
							})
							setReset(reset + 1)
						}),

					onRowUpdate: (newData, oldData) => {
						return new Promise((resolve, reject) => {

							let brocolli = new Lot(
								newData.production_system_name,
								newData.lot_number,
								newData.line_number,
								newData.order_ref,
								newData.order_size,
								getSQLDateTime(),
								newData.order_date,
								newData.lot_date,
								newData.due_date,
								newData.customer,
								newData.customer_name,
								newData.is_printed
							)

							axiosPost(brocolli, 'Update_Lots').then((r) => {
								console.log(r);
								setReset(reset + 1)
								resolve();
							}).catch((e) => {
								console.log(e)
								console.log('postError')
							})
							setReset(reset + 1)
						});
					},

					onRowDelete: oldData =>
						new Promise((resolve, reject) => {

							axiosPost(oldData, 'Delete_Lots').then((r) => {
								console.log(r)
								setReset(reset + 1);
								resolve();
							}).catch((e) => {
								console.log(e)
								console.log('postError')
							})


						}),

				}}
			/>
		</div>


	)
}
