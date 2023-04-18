import { Navbar } from '../Common/Navbar/Navbar';
import { Lot } from '../../Util/Lot';
import { axiosGet, axiosPost } from '../../Util/API';
import { useEffect, useState } from 'react';
import MaterialTable from "@material-table/core"
import "./Lots.scss"
import { read, utils } from "xlsx"
import * as React from 'react';
import PublishIcon from '@mui/icons-material/Publish';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import Button from '@mui/material/Button';

export const Lots = () => {
	var [reset, setReset] = useState(0)
	var [data, setData] = useState([])
	var [Production_Systems, setProduction_Systems] = useState([])
	var [uploadedSheet, setUploadedSheet] = useState([])

	useEffect(() => {
		axiosGet('Lots').then((e) => {
			setData(e.data)
		})
			.catch((err) => {
				console.log(err.message)
			})
	}, [reset])

	useEffect(() => {
		axiosGet('Production_Systems').then((e) => {
			setProduction_Systems(e.data)
		})
			.catch((err) => {
				console.log(err.message)
			})
	}, [])

	function getProductionSystems() {
		let APS = {};
		for (let i = 0; i < Production_Systems.length; i++) {
			APS = { ...APS, [Production_Systems[i].production_system_name]: Production_Systems[i].production_system_name };
		}
		return APS;
	}

	const COLS = [
		{ field: "lot_number", title: "Lot #", editable: 'onAdd' },
		{ field: "order_", title: "Order", editable: 'onAdd' },
		{ field: "order_date", title: "Order Date", editable: 'onAdd' },
		{ field: "clin", title: "CLIN", editable: 'onAdd' },
		{ field: "nsn_number", title: "NSN #", editable: 'onAdd' },
		{ field: "item_number", title: "Item #", editable: 'onAdd' },
		{ field: "item_description", title: "Item Description", editable: 'onAdd' },
		{ field: "qty_ordered", title: "QTY Ordered", editable: 'onAdd' },
		{ field: "u_m", title: "U/M", editable: 'onAdd' },
		{ field: "due_date", title: "Due Date", editable: 'onAdd' },
		{ field: "customer", title: "Customer", editable: 'onAdd' },
		{ field: "contract_number", title: "PO# / Contract #", editable: 'onAdd' },
		{ field: "date_open", title: "Date Open", editable: 'onAdd' },
		{ field: "date_start", title: "Date Start", editable: 'onAdd' },
		{ field: "date_closed", title: "Date closed", editable: 'onAdd' },
		{ field: "status_", title: "Status", editable: 'onAdd' },
		{ field: "comments", title: "Comments", editable: 'onAdd' },
		{ field: "qr_lot_generated", title: "QR Lot Generated", lookup: { '0': '0', '1': '1' } },
		{ field: "is_printed", title: "Printed", lookup: { '0': '0', '1': '1'} },
		{ field: "production_system_name", title: "Production System", lookup: getProductionSystems() },
	]

	const readUploadFile = (e) => {
		e.preventDefault();
		if (e.target.files) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const data = e.target.result;
				const workbook = read(data, { type: "array" });
				const sheetName = workbook.SheetNames[0];
				const worksheet = workbook.Sheets[sheetName];
				setUploadedSheet(utils.sheet_to_json(worksheet))
				console.log(worksheet)
			};
			reader.readAsArrayBuffer(e.target.files[0]);
		}
	}

	const handleClick = () => {
		axiosPost(uploadedSheet, 'Upload_Lots').then((r) => {
			console.log(uploadedSheet)
			console.log(r)
			setReset(reset++)
		}).catch((e) => {
			console.log(e)
			console.log('postError')
		})
		setReset(reset++)
		setUploadedSheet([])
	}

	return (
		<div className='lotsPage'>
			<Navbar></Navbar>
			<div className='buttons'>
			
				<Button variant="contained" component="label" startIcon={<CreateNewFolderIcon/>}>
					Select CSV
					<input hidden multiple type="file" onChange={readUploadFile} />
				</Button>

				<Button variant="contained" onClick={handleClick} startIcon={<PublishIcon />}>
					Upload CSV
				</Button>
			</div>
			<div className='materialTable'>
				<MaterialTable title='Lots'
					data={data}
					columns={COLS}
					options={{
						pageSize: 10,       // make initial page size
						emptyRowsWhenPaging: false,   // To avoid of having empty rows
						pageSizeOptions: [10, 15, 20, 25, 50, 100],    // rows selection options
						actionsColumnIndex: 20,
						filtering: true
					}}
					editable={{

						onRowAdd: newData =>
							new Promise((resolve, reject) => {

								let brocolli = new Lot(
									newData.lot_number,
									newData.order_,
									newData.order_date,
									newData.clin,
									newData.nsn_number,
									newData.item_number,
									newData.item_description,
									newData.qty_ordered,
									newData.u_m,
									newData.due_date,
									newData.customer,
									newData.contract_number,
									newData.date_open,
									newData.date_start,
									newData.date_closed,
									newData.status_,
									newData.comments,
									newData.qr_lot_generated,
									newData.is_printed,
									newData.production_system_name
								)

								axiosPost(newData, 'Lots').then((r) => {
									console.log(r)
									setReset(reset + 1)
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
									newData.lot_number,
									newData.order_,
									newData.order_date,
									newData.clin,
									newData.nsn_number,
									newData.item_number,
									newData.item_description,
									newData.qty_ordered,
									newData.u_m,
									newData.due_date,
									newData.customer,
									newData.contract_number,
									newData.date_open,
									newData.date_start,
									newData.date_closed,
									newData.status_,
									newData.comments,
									newData.qr_lot_generated,
									newData.is_printed,
									newData.production_system_name
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
					}}
				/>
			</div>
		</div>


	)
}
