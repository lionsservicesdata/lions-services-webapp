import { Navbar } from '../Common/Navbar/Navbar';
import React from 'react'
import DisplayTable from '../Common/DisplayTable/DisplayTable';
import { InputField } from '../Common/InputField/InputField';
import { Lot } from '../../Util/Lot';
import { getSQLDateTime } from '../../Util/HelperFunctions';
import { axiosGet, axiosPost } from '../../Util/API';
import { useEffect, useState } from 'react';
import { QR } from '../../Util/QR';

export const Lots = () => {
	var stations = getTable('Control_Stations')
	var [maxID, setMaxID] = useState(0)
	var [data, setData] = useState(new Lot(
		'',
		0,
		0,
		0,
		0,
		'1900-01-01 00:00:00',
		'1900-01-01 00:00:00',
		'1900-01-01 00:00:00',
		'1900-01-01 00:00:00',
		'',
		''
	));

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

	const getMaxID = () => {
		axiosGet('MaxID').then((r) => {
			setMaxID(r.data[0][""])
		}).catch((e) => {
			console.log(e)
			console.log('postError')
		})
	}

	const createQRLot = (data) => {
		var system_stations = []
		var Station_Data = []
		stations.forEach(element => {
			if (element.production_system_name == data.production_system_name && element.station_type == 'scan') {
				system_stations.push(element)
				Station_Data.push([element.station_name, data.lot_number, data.order_size / element.bundle_size, element.bundle_size])
			}

		})

		getMaxID()
		var count = maxID
		for (let i = 0; i < system_stations.length; i++) {

			for (let j = 0; j < Station_Data[i][2]; j++) {
				count = count+1
				var nthQR = new QR(
					count,
					Station_Data[i][0],
					data.lot_number,
					data.production_system_name,
					Station_Data[i][3],
					0,
					getSQLDateTime(),
					'1900-01-01 00:00:00',
					data.production_system_name + '-' + data.lot_number + '-' + Station_Data[i][0] + '-' + count
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


	const postData = (event) => {
		event.preventDefault();
		data = new Lot(
			document.getElementById('production_system_name').value,
			document.getElementById('lot_number').value,
			document.getElementById('line_number').value,
			document.getElementById('order_ref').value,
			document.getElementById('order_size').value,
			getSQLDateTime(),
			document.getElementById('order_date').value,
			document.getElementById('lot_date').value,
			document.getElementById('due_date').value,
			document.getElementById('customer').value,
			document.getElementById('customer_name').value)

		axiosPost(data, 'Lots').then((r) => {
			console.log(r)
		}).catch((e) => {
			console.log(e)
			console.log('postError')
		});

		createQRLot(data)
	}

	const updateData = (event) => {
		event.preventDefault()
		data = new Lot(
			document.getElementById('update_production_system_name').value,
			document.getElementById('update_lot_number').value,
			document.getElementById('update_line_number').value,
			document.getElementById('update_order_ref').value,
			document.getElementById('update_order_size').value,
			getSQLDateTime(),
			document.getElementById('update_order_date').value,
			document.getElementById('update_lot_date').value,
			document.getElementById('update_due_date').value,
			document.getElementById('update_customer').value,
			document.getElementById('update_customer_name').value
		);

		axiosPost(data, 'Update_Lots').then((r) => {
			console.log(r)
		}).catch((e) => {
			console.log(e)
			console.log('postError')
		});
	}

	const deleteData = (event) => {
		event.preventDefault()
		data = new Lot(
			document.getElementById('delete_production_system_name').value,
			document.getElementById('delete_lot_number').value,
			0,
			0,
			0,
			getSQLDateTime(),
			'',
			'',
			'',
			'',
			''
		);

		axiosPost(data, 'Delete_Lots').then((r) => {
			console.log(r)
		}).catch((e) => {
			console.log(e)
			console.log('postError')
		});
	}

	return (
		<div className='lotsPage'>
			<Navbar></Navbar>
			<DisplayTable tableName={'Lots'}></DisplayTable>
			<br />
			<ul>
				<div className='InputForm'>
					<form >
						<InputField id={'production_system_name'} label={'Production System Name'} />
						<InputField id={'lot_number'} label={'Lot Number'} />
						<InputField id={'line_number'} label={'Line Number'} />
						<InputField id={'order_ref'} label={'Order Ref'} />
						<InputField id={'order_size'} label={'Order Size'} />
						<InputField id={'order_date'} label={'Order Date'} />
						<InputField id={'lot_date'} label={'Lot Date'} />
						<InputField id={'due_date'} label={'Due Date'} />
						<InputField id={'customer'} label={'Customer'} />
						<InputField id={'customer_name'} label={'Customer Name'} />
						<input type="submit" value="Add" onClick={(e) => { postData(e) }} />
					</form>
				</div>
				<br />
				<div className='InputForm'>
					<form >
						<InputField id={'update_production_system_name'} label={'Production System Name'} />
						<InputField id={'update_lot_number'} label={'Lot Number'} />
						<InputField id={'update_line_number'} label={'Line Number'} />
						<InputField id={'update_order_ref'} label={'Order Ref'} />
						<InputField id={'update_order_size'} label={'Order Size'} />
						<InputField id={'update_order_date'} label={'Order Date'} />
						<InputField id={'update_lot_date'} label={'Lot Date'} />
						<InputField id={'update_due_date'} label={'Due Date'} />
						<InputField id={'update_customer'} label={'Customer'} />
						<InputField id={'update_customer_name'} label={'Customer Name'} />
						<input type="submit" value="Update" onClick={(e) => { updateData(e) }} />
					</form>
				</div>
				<br />
				<div className='InputForm'>
					<form >
						<InputField id={'delete_production_system_name'} label={'Production System Name'} />
						<InputField id={'delete_lot_number'} label={'Lot Number'} />
						<input type="submit" value="Delete" onClick={(e) => { deleteData(e) }} />
					</form>
				</div>
			</ul >
		</div>


	)
}
