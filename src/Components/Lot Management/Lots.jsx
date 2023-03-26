import { Navbar } from '../Common/Navbar/Navbar';
import React from 'react'
import DisplayTable from '../Common/DisplayTable/DisplayTable';
import { InputField } from '../Common/InputField/InputField';
import { Lot } from '../../Util/Lot';
import { useState } from 'react';
import { getSQLDateTime } from '../../Util/HelperFunctions';
import { axiosPost } from '../../Util/API';

export const Lots = () => {

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

	const postData = (event) => {
		event.preventDefault()
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
			document.getElementById('customer_name').value
		);

		axiosPost(data, 'Lots').then((r) => {
			console.log(r)
		}).catch((e) => {
			console.log(e)
			console.log('postError')
		});
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
