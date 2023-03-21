import { Navbar } from '../Common/Navbar/Navbar';
import React from 'react';
import { axiosPost } from '../../Util/API';
import { useState } from 'react';
import { Production_System } from '../../Util/Production_System';


export const ProductionSystems = () => {
	var[data, setData] = useState('')

	const postData = () => {
		
		setData(new Production_System(document.getElementById('productionSystem').value,document.getElementById('productName').value, String(new Date.getTime())))

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
			<form onSubmit={postData()}>
				<label>Name of Production System:</label>
					<input type="text" id="productionSystem" name="productionSystem"/>
				<br/>
				<label>Product Name:</label>
					<input type="text" id="productName" name="productName"/>
				<input type="submit" value="Submit"/>
			</form>
		</div>
	)
}
