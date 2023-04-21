import { Navbar } from '../Common/Navbar/Navbar'
import React from 'react'
import { axiosPost, axiosGet } from '../../Util/API'
import { useState, useEffect } from 'react'
import { Production_System } from '../../Util/Production_System'
import { getSQLDateTime } from '../../Util/HelperFunctions'
import MaterialTable from "@material-table/core"
import "./ProductionSystems.scss"

export const ProductionSystems = () => {
	var [data, setData] = useState([])
	var [reset, setReset] = useState(0)

	useEffect(() => {
		axiosGet('Production_Systems').then((e) => {
			setData(e.data)
		})
			.catch((err) => {
				console.log(err.message)
			})
	}, [reset])

	const COLS = [
		{ field: "production_system_name", title: "Production System Name", editable: 'onAdd' },
		{ field: "product_name", title: "Product Name" },
		{ field: "date_created", title: "Date Created", editable: 'never'}
	]
	return (
		<div className='productionSystemsPage'>
			<div className='materialTable'>
				<MaterialTable title='Production Systems'
					data={data}
					columns={COLS}

					options={{
						paging: false,
						pageSize: 5,       // make initial page size
						emptyRowsWhenPaging: false,   // To avoid of having empty rows
						pageSizeOptions: [5, 10, 15, 20],    // rows selection options
						actionsColumnIndex: 4
					}}

					editable={{
						onRowAdd: newData =>
							new Promise((resolve, reject) => {

								let brocolli = new Production_System(
									newData.production_system_name,
									newData.product_name,
									getSQLDateTime()
								)

								axiosPost(brocolli, 'Production_Systems').then((r) => {
									console.log(r)
									setReset(reset + 1)
									resolve();
								}).catch((e) => {
									console.log(e)
									console.log('postError')
								})
								setReset(reset + 1)
							}),

						onRowUpdate: (newData, oldData) => {
							return new Promise((resolve, reject) => {

								let brocolli = new Production_System(
									newData.production_system_name,
									newData.product_name,
									getSQLDateTime()
								)

								axiosPost(brocolli, 'Update_Production_Systems').then((r) => {
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
								axiosPost(oldData, 'Delete_Production_Systems').then((r) => {
									console.log(r)
									setReset(reset + 1);
									resolve();
								}).catch((e) => {
									console.log(e)
									console.log('postError')
								})
								setReset(reset + 1);
							}),
					}}
				/>
			</div>
		</div>
	)
}
