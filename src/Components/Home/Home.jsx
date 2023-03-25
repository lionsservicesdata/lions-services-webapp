import { Navbar } from '../Common/Navbar/Navbar'
import React from 'react'

export const Home = () => {
	return (
		<div className='homePage'>
			<Navbar></Navbar>
			<a href="https://zsbportal.zebra.com/home" target="_blank" rel="noopener noreferrer">Printer</a>
			<br/>
			<a href="https://drive.google.com/drive/my-drive" target="_blank" rel="noopener noreferrer">Google Drive</a>
			<br/>
			<a href="https://drive.google.com/drive/folders/1-TkD_vIj-ab0ne4yLexNX9avnjsBeCKo" target="_blank" rel="noopener noreferrer">Google Form</a>

			
		</div>
	)
}
