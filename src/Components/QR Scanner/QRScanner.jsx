import { Navbar } from '../Common/Navbar/Navbar';
import { QrReader } from 'react-qr-reader'
import { useState } from 'react'
import React from 'react'
import sound from '/src/Assets/beep.mp3'


export const QRScanner = () => {
	var [data, setData] = useState('No Scan');
	const audio = new Audio(sound);
	return (
		<div className='qrScannerPage'>
			<Navbar></Navbar>
			<h1>{data}</h1>
			<QrReader onResult={(result, error) => {
                if (!!result) {
                    setData(result?.text);
					audio.play();
					console.log(result);
                }    
            }}
            videoStyle = {{height: '75%', width: '50%'}}
            constraints = {{ facingMode: 'environment'}}
            /> 
			
		</div>
	)
}
