import { Button } from '../Common/Button/Button'
import { Link } from 'react-router-dom'
import { QrReader } from 'react-qr-reader'
import { useState } from 'react'
import React from 'react'

export const Home = () => {
	var [data, setData] = useState('no data');

	return (
		<div className='homeCont'>
			<Link to={"/Detail"}>
				<Button
					text = "Detail"
				/>
			</Link>
			<div className='homeBody'>

				<QrReader onResult={(result, error) => {
                if (!!result) {
                    setData(result?.text);
					console.log(result)
                }    
            }}
            videoStyle = {{height: '75%'}}
            constraints = {{ facingMode: 'environment'}}
            /> 
			<h1>{data}</h1>
			</div>
		</div>
	)
}
