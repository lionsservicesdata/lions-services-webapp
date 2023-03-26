import { Navbar } from '../Common/Navbar/Navbar';
import React from 'react'
import { Control_Station } from '../../Util/Control_Station';
import { useState } from 'react';
import { getSQLDateTime } from '../../Util/HelperFunctions';
import { axiosPost } from '../../Util/API';
import { InputField } from '../Common/InputField/InputField';
import DisplayTable from '../Common/DisplayTable/DisplayTable';

export const ControlStations = () => {
	var [data, setData] = useState(new Control_Station(
		'',
		'',
		'1900-01-01 00:00:00',
		0,
		'1900-01-01 00:00:00'
		));	

	const postData = (event) => {
		event.preventDefault()
		data = new Control_Station(
			document.getElementById('station_name').value,
			document.getElementById('production_system_name').value,
			document.getElementById('station_type').value,
			document.getElementById('bundle_size').value,
			getSQLDateTime()
			);

		axiosPost(data,'Control_Stations').then((r)=> {
			console.log(r)
		}).catch((e)=>{
			console.log(e)
			console.log('postError')
		});
	}

	const updateData = (event) => {
		event.preventDefault()
		data = new Control_Station(
			document.getElementById('update_station_name').value,
			document.getElementById('update_production_system_name').value,
			document.getElementById('update_station_type').value,
			document.getElementById('update_bundle_size').value,
			getSQLDateTime()
			);

		axiosPost(data,'Update_Control_Stations').then((r)=> {
			console.log(r)
		}).catch((e)=>{
			console.log(e)
			console.log('postError')
		});
	}

	const deleteData = (event) => {
		event.preventDefault()
		data = new Control_Station(
			document.getElementById('delete_station_name').value,
			document.getElementById('delete_production_system_name').value,
			'',
			0,
			getSQLDateTime()
			);

		axiosPost(data,'Delete_Control_Stations').then((r)=> {
			console.log(r)
		}).catch((e)=>{
			console.log(e)
			console.log('postError')
		});
	}
	
	return (
		<div className='controlStationsPage'>
			<Navbar></Navbar>
			<DisplayTable tableName={'Control_Stations'}></DisplayTable>
			<br/>
			<form >
				<InputField id={'station_name'} label = {'Station Name'}/>
				<InputField id={'production_system_name'} label = {'Production System Name'}/>
				<InputField id={'station_type'} label = {'Station Type'}/>
				<InputField id={'bundle_size'} label = {'Bundle Size'}/>
				<input type="submit" value="Add" onClick={(e) => {postData(e)}}/>
			</form>
			<br/>
			<form >
				<InputField id={'update_station_name'} label = {'Station Name'}/>
				<InputField id={'update_production_system_name'} label = {'Production System Name'}/>
				<InputField id={'update_station_type'} label = {'Station Type'}/>
				<InputField id={'update_bundle_size'} label = {'Bundle Size'}/>
				<input type="submit" value="Update" onClick={(e) => {updateData(e)}}/>
			</form>
			<br/>
			<form >
				<InputField id={'delete_station_name'} label = {'Station Name'}/>
				<InputField id={'delete_production_system_name'} label = {'Production System Name'}/>
				<input type="submit" value="Delete" onClick={(e) => {deleteData(e)}}/>
			</form>

		</div>
	)
}
