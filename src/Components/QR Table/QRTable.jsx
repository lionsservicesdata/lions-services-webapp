import { Navbar } from '../Common/Navbar/Navbar'
import React from 'react'
import { axiosPost, axiosGet } from '../../Util/API'
import { useState, useEffect } from 'react'
import { QR } from '../../Util/QR'
import MaterialTable from "@material-table/core"
import Button from '@mui/material/Button';
import "./QRTable.scss"

import PublishIcon from '@mui/icons-material/Publish';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export const QRTable = () => {
	var [QRTable, setQRTable] = useState([])
	var [reset, setReset] = useState(0)
	var [Lots, setLots] = useState([])
	const [lotNumber, setLotNumber] = useState('')
	var lotsJSON = ""

	useEffect(() => {
		axiosGet('QR').then((e) => {
			setQRTable(e.data)
		})
			.catch((err) => {
				console.log(err.message)
			})
	}, [])

	useEffect(() => {
		axiosGet('Lots').then((e) => {
			setLots(e.data)
		})
			.catch((err) => {
				console.log(err.message)
			})
	}, [])

	const COLS = [
		{ field: "id", title: "Id" },
		{ field: "station_name", title: "Station Name" },
		{ field: "lot_number", title: "Lot Number" },
		{ field: "production_system_name", title: "Production System" },
		{ field: "bundle_size", title: "Bundle Size" },
		{ field: "scanned", title: "Scanned" },
		{ field: "date_created", title: "Date Created" },
		{ field: "date_scanned", title: "Date Scanned" },
		{ field: "qr_string", title: "QR String" }
	]

	const handleChange = (event) => {
		setLotNumber(event.target.value);
	};

	function getLots() {
		let APS = {};
		for (let i = 0; i < Lots.length; i++) {
			APS = { ...APS, [Lots[i].lot_number]: Lots[i].lot_number };
		}
		lotsJSON = APS
	}
	getLots();

	const handleClick = () => {
		axiosPost(lotNumber, 'Generate_Single_Lot').then((r) => {

			console.log(r)
			setReset(reset++)
		}).catch((e) => {
			console.log(e)
			console.log('postError')
		})
		setReset(reset++)
	}

	return (
		<div className='QRPage'>
			<Navbar></Navbar>

			<div>
				<FormControl sx={{ m: 1, minWidth: 120 }}>
					<InputLabel id="demo-simple-select-helper-label" >Lot Number</InputLabel>
					<Select
						labelId="demo-simple-select-helper-label"
						id="demo-simple-select-helper"
						value={lotNumber}
						label="Lot Number"
						onChange={handleChange}
					>
						{Object.keys(lotsJSON).map((key, i) => (
							<MenuItem key={i} value={lotsJSON[key]}>
								{lotsJSON[key]}
							</MenuItem>
						))}

					</Select>
					<FormHelperText>Select Lot for QR Generation</FormHelperText>
				</FormControl>
			</div>
			<div className = 'generateLot'>
			<Button variant="contained" onClick={handleClick} startIcon={<PublishIcon />}>
					Generate QR Lot
				</Button>
			</div>


			<div className='materialTable'>
				<MaterialTable title='QR Codes'
					data={QRTable}
					columns={COLS}
					options={{
						paging: true,
						pageSize: 25,       // make initial page size
						emptyRowsWhenPaging: false,   // To avoid of having empty rows
						pageSizeOptions: [10, 15, 20, 25, 50, 100, 200],    // rows selection options
						actionsColumnIndex: 4
					}}
					editable={{
						onRowAdd: newData =>
							new Promise((resolve, reject) => {

								axiosPost(newData, 'QR').then((r) => {
									console.log(r)
									setReset(reset++)
									resolve();
								}).catch((e) => {
									console.log(e)
									console.log('postError')
								})
							}),
					}}
				/>
			</div>
		</div>
	)
}
