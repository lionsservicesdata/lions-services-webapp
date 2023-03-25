import { Navbar } from '../Common/Navbar/Navbar';
import { QrReader } from 'react-qr-reader'
import { useState } from 'react'
import React from 'react'
import { QRSCAN } from '../../Util/QRSCAN';
import { axiosPost } from '../../Util/API';
import { getSQLDateTime } from '../../Util/HelperFunctions';

export const QRScanner = () => {

	var [data, setData] = useState(new QRSCAN(0,'1900-01-01 00:00:00'));
	var audio = new Audio('../src/Assets/beep.mp3');

	const scanQR = (data) => {
		axiosPost(data, 'QRSCAN').then((r) => {
			console.log(r)
		}).catch((e) => {
			console.log(e)
			console.log('postError')});
	}

	return (
		<div className='qrScannerPage'>
			<Navbar></Navbar>
		
			<h1>{JSON.stringify(data)}</h1>

			<QrReader onResult={(result, error) => {
                if (!!result) {
                    setData(result?.text);
					audio.play();
					console.log(result);
					if (result != undefined) {
						console.log(String(getSQLDateTime()))
						scanQR(new QRSCAN(result?.text, getSQLDateTime()));
					}
                }  
            }}

            videoStyle = {{height: '75%', width: '50%'}}
            constraints = {{ facingMode: 'environment'}}
            /> 
			
		</div>
	)
}
