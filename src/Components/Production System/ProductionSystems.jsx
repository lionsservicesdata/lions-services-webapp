import { Navbar } from '../Common/Navbar/Navbar';
import React from 'react';
import { axiosPost, axiosGet } from '../../Util/API';
import { useState } from 'react';
import { Production_System } from '../../Util/Production_System';
import { getSQLDateTime } from '../../Util/HelperFunctions';
import DisplayTable from '../Common/DisplayTable/DisplayTable';
import { InputField } from '../Common/InputField/InputField';

export const ProductionSystems = () => {
	var [data, setData] = useState(new Production_System(
		'test',
		'test',
		'1900-01-01 00:00:00'
		));	

	const postData = (event) => {
		event.preventDefault()

		data = new Production_System(
			document.getElementById('production_system_name').value,
			document.getElementById('product_name').value,
			getSQLDateTime()
			);

		axiosPost(data,'Production_Systems').then((r)=> {
			console.log(r)
		}).catch((e)=>{
			console.log(e)
			console.log('postError')
		});
	}

	const updateData = (event) => {
		event.preventDefault()

		data = new Production_System(
			document.getElementById('update_production_system_name').value,
			document.getElementById('update_product_name').value,
			getSQLDateTime()
			);

		axiosPost(data,'Update_Production_Systems').then((r)=> {
			console.log(r)
		}).catch((e)=>{
			console.log(e)
			console.log('postError')
		});
	}

	const deleteData = (event) => {
		event.preventDefault()

		data = new Production_System(
			document.getElementById('delete_production_system_name').value,
			'',
			getSQLDateTime()
			);

		axiosPost(data,'Delete_Production_Systems').then((r)=> {
			console.log(r)
		}).catch((e)=>{
			console.log(e)
			console.log('postError')
		});
	}

	return (
		<div className='productionSystemsPage'>
			<Navbar></Navbar>
			<DisplayTable tableName={'Production_Systems'}></DisplayTable>
			<br/>
			<form >
				<InputField id = {'production_system_name'} label = {'Production System Name:'}/>
				<InputField id = {'product_name'} label = {'Product Name:'}/>
				<input type="submit" value="Add" onClick={(e) => {postData(e)}}/>
			</form>
			<br/>
			<form >
				<InputField id = {'update_production_system_name'} label = {'Production System Name:'}/>
				<InputField id = {'update_product_name'} label = {'Product Name:'}/>
				<input type="submit" value="Update" onClick={(e) => {updateData(e)}}/>
			</form>
			<br/>
			<form >
				<InputField id = {'delete_production_system_name'} label = {'Production System Name:'}/>
				<input type="submit" value="Delete" onClick={(e) => {deleteData(e)}}/>
			</form>
		</div>
	)
}
