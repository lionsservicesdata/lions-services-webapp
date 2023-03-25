import { Navbar } from '../Common/Navbar/Navbar';
import React from 'react'
import { Control_Station } from '../../Util/Control_Station';
import { useState } from 'react';
import { getSQLDateTime } from '../../Util/HelperFunctions';
import { axiosPost } from '../../Util/API';
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
	
	return (
		<div className='controlStationsPage'>
			<Navbar></Navbar>
			<DisplayTable tableName={'Control_Stations'}></DisplayTable>
			<form >
				<label>Name of Control Station:</label>
				<br/>
				<input type="text" id="production_system_name" name="production_system_name"/>

				<br/>

				<label>Production System:</label>
				<br/>
				<input type="text" id="station_name" name="station_name"/>

				<br/>

				<label>Station Type:</label>
				<br/>
				<input type="text" id="station_type" name="station_type"/>
				
				<br/>

				<label>Bundle Size</label>
				<br/>
				<input type="text" id="bundle_size" name="bundle_size"/>
				
				<input type="submit" value="Submit" onClick={(e) => {postData(e)}}/>
			</form>
		</div>
	)
}
