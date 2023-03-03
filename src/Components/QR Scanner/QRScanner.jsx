import { Navbar } from '../Common/Navbar/Navbar';
import { QrReader } from 'react-qr-reader'
import { useState } from 'react'
import React from 'react'


export const QRScanner = () => {
	var [data, setData] = useState('No Scan');
	var audio = new Audio('/src/Assets/beep.mp3');
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
