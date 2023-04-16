import { Link } from 'react-router-dom'
import React from 'react'
import './Navbar.scss'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import QrCodeIcon from '@mui/icons-material/QrCode';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PrintIcon from '@mui/icons-material/Print';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import BallotIcon from '@mui/icons-material/Ballot';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

export const Navbar = () => {
	const [value, setValue] = React.useState(0);
	return (
		<div className='navbar'>
			<Box>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				>
					<BottomNavigationAction
						component={Link}
						to="/"
						label="Home"
						icon={<HomeIcon />}
					/>
					
					<BottomNavigationAction
						component={Link}
						to="/QRScanner"
						label="QR Scanner"
						icon={<QrCodeScannerIcon />}
					/>

					<BottomNavigationAction
						component={Link}
						to="/Lots"
						label="Lots"
						icon={<PostAddIcon />}
					/>

					<BottomNavigationAction
						component={Link}
						to="/ProductionSystems"
						label="Production Systems"
						icon={<PrecisionManufacturingIcon />}
					/>

					<BottomNavigationAction
						component={Link}
						to="/ControlStations"
						label="Control Stations"
						icon={<AccountTreeIcon />}
					/>

					<BottomNavigationAction
						component={Link}
						to="/QRTable"
						label="QR Code Table"
						icon={<QrCodeIcon />}
					/>

					<BottomNavigationAction
						href="https://zsbportal.zebra.com/home"
						target="_blank"
						rel="noopener noreferrer"
						label="Zebra Printer Portal"
						icon={<PrintIcon />}
					/>

					<BottomNavigationAction
						href="https://drive.google.com/drive/my-drive"
						target="_blank"
						rel="noopener noreferrer"
						label="Google Drive"
						icon={<CloudCircleIcon />}
					/>

					<BottomNavigationAction
						href="https://drive.google.com/drive/folders/1-TkD_vIj-ab0ne4yLexNX9avnjsBeCKo"
						target="_blank"
						rel="noopener noreferrer"
						label="Google Forms"
						icon={<BallotIcon />}
					/>
				</BottomNavigation>
			</Box>
		</div>
	)
}
