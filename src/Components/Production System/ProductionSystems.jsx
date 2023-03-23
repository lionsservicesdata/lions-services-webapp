import { Navbar } from '../Common/Navbar/Navbar';
import React from 'react';
import { axiosPost, axiosGet } from '../../Util/API';
import { useState } from 'react';
import { Production_System } from '../../Util/Production_System';



export const ProductionSystems = () => {
	var [data, setData] = useState(new Production_System('test','test','1900-01-01 00:00:00'));	

	const postData = () => {
		//data = new Production_System(document.getElementById('productionSystem').value, document.getElementById('productName').value, String(new Date.getTime()));
		
		axiosPost(data,'Production_Systems').then((r)=> {
			console.log(r)
		}).catch((e)=>{
			console.log(e)
			console.log('postError')
		});
	}

	return (
		<div className='productionSystemsPage'>
			<Navbar></Navbar>
			<form >
				<label>Name of Production System:</label>
				<br/>
					<input type="text" id="productionSystem" name="productionSystem"/>
				<br/>
				<label>Product Name:</label>
				<br/>
					<input type="text" id="productName" name="productName"/>
				<br/>
				<input type="submit" value="Submit" onClick={postData()}/>
			</form>
		</div>
	)
}
