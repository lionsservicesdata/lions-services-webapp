import { Navbar } from '../Common/Navbar/Navbar';
import { QrReader } from 'react-qr-reader'
import { useState } from 'react'
import React from 'react'
import { QRSCAN } from '../../Util/QRSCAN';
import { axiosPost } from '../../Util/API';
import { getSQLDateTime } from '../../Util/HelperFunctions';
import "./QRScanner.scss"

export const QRScanner = () => {
	const [success, setSuccess] = useState(false);
	var [data, setData] = useState();
	var audio = new Audio('../src/Assets/beep.mp3');
	const cameraDirections = ['user', 'environment']

	const [environment, setEnv] = useState("environment");


	const scanQR = (data) => {
		axiosPost(data, 'QRSCAN').then((r) => {
			console.log(r)
		}).catch((e) => {
			console.log(e)
			console.log('postError')
		});
	}

	const successHandler = () => {
		setSuccess(true);
		setTimeout(() => { setSuccess(false); }, 5000)

	}

	const switchEnvironment = () => {
		setEnv(environment === "environment" ? "user" : "environment");
	}

	return (
		<div className='qrScannerPage'>
			{success ?
				<div style={{ position: "absolute", display: "block", top: 0, left: 0, width: "100%", height: "100vh", zIndex: 3, backgroundColor: "rgba(143, 206, 0, .65)" }}>
					<div style={{ position: "absolute", top: "40%", display: "block", color: 'White', fontSize: 100, margin: "0px auto", textAlign: 'middle', width: '100%' }}>
						Success
						{data != null ? <h6>Scanned bundle: {data}</h6> : <></>}
					</div>
				</div>
				:
				<div className='qrScannerContent'>
					<QrReader onResult={(result, error) => {
						if (!!result) {
							setData(result?.text);
							audio.play();
							successHandler();
							console.log(result);
							if (result != undefined) {
								console.log(String(getSQLDateTime()))
								scanQR(new QRSCAN(result?.text, getSQLDateTime()));
							}
						}
					}}
						videoStyle={{ height: '100%', width: '100%' }}
						constraints={{ facingMode: environment }}
					/>
					{data != null ? <h1>Last Scanned bundle: {data}</h1> : <></>}
				</div>}
			<button onClick={() => { switchEnvironment() }}>switch camera</button>
		</div>
	)
}
