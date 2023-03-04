import { Navbar } from '../Common/Navbar/Navbar';
import React from 'react';
import DisplayTable from '../Common/DisplayTable/DisplayTable';

export const ProductionSystems = () => {
	return (
		<div className='productionSystemsPage'>
			<Navbar></Navbar>
			<DisplayTable tableName={'Production_Systems'}></DisplayTable>
		</div>
	)
}
